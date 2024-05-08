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
            }  
            if (Date.now() < token.accessTokenExpires){
                console.log("TOKEN STILL VALID");
                return token;
            }
        }

        }
    }
});