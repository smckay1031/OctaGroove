import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";


export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
      signIn: "/login"
    },

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
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    userName: user.name,
                    userImage: user.image,
                    userId: user.id,
                    expires_in: account.expires_at,
                    }; 
            } else if (Date.now() < token.expires_in * 1000 ){
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
                          refresh_token: token.refresh_token!
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
              session.user.name = token.userName
              session.user.id = token.userId
              session.user.image = token.userImage
              session.user.access_token = token.access_token
              session.user.refresh_token = token.refresh_token
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
      expires_in: number
      refresh_token: string
      userImage: string
      userId: string
      userName: string
      error?: "RefreshAccessTokenError"
  }
}