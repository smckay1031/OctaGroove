import { profile } from "console";
import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Spotify({
            clientId: process.env.AUTH_SPOTIFY_ID,
            clientSecret: process.env.AUTH_SPOTIFY_SECRET,
        })
    ],
 
    callbacks: {
       async jwt({ token, account, user}) {
            if(account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    userName: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }; 
            } else if (Date.now() < token.accessTokenExpires){
                return token;

            } else {
                if (!token.refresh_token) throw new Error("Missing refresh token")
 
                    // If the access token has expired, try to refresh it
                    try {
                      const response = await fetch("https://accounts.spotify.com/api/token", {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                          client_id: process.env.AUTH_SPOTIFY.ID!,
                          client_secret: process.env.AUTH_SPOTIFY_SECRET!,
                          grant_type: "refresh_token",
                          refresh_token: token.refresh_token,
                        }),
                        method: "POST",
                      })
             
                      const responseTokens = await response.json()
             
                      if (!response.ok) throw responseTokens
                      console.log(responseTokens);
                      return {
                        ...token, // Keep the previous token properties
                        access_token: responseTokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + responseTokens.expires_in),
                        // Fall back to old refresh token, but note that
                        // many providers may only allow using a refresh token once.
                        refresh_token: responseTokens.refresh_token ?? token.refresh_token,
                      }
                    } catch (error) {
                      console.error("Error refreshing access token", error)
                      // The error property will be used client-side to handle the refresh token error
                      return { ...token, error: "RefreshAccessTokenError" as const }
                     }
                  }
                }   
        },
        async session({ session, token }) {
            session.error = token.error
            if(token.userName) {
              session.user.acessToken = token.accessToken
              session.user.refreshToken = token.refreshToken
              session.user.username = token.userName
            }
          return session
        }          
    });

declare module "next-auth" {
    interface Session {
      error?: "RefreshAccessTokenError"
    }
  }
   
  declare module "next-auth/jwt" {
    interface JWT {
      access_token: string
      expires_at: number
      refresh_token: string
      error?: "RefreshAccessTokenError"
  }
}