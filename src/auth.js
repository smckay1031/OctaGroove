
import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";
import authURL from "../lib/spotify";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  pages: {
    signIn: "/login",
  },

  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
      authorization: authURL,
    }),
  ],

  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async jwt({ token, account, user,}) {
      if (account && user) {

        return {
          ...token,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          userName: user.name,
          userImage: user.image,
          userId: user.id,
          expires_at: account.expires_at,
          current_time: Date.now(),
        };
      } else if (Date.now() < token.expires_at * 1000) {
        return token;
      } else {
        if (!token.refresh_token) throw new Error("Missing refresh token");
        // If the access token has expired, try to refresh it
        try {
          const params = {
            grant_type: "refresh_token",
            refresh_token: token.refresh_token,
            client_id: process.env.AUTH_SPOTIFY_ID,
            client_secret: process.env.AUTH_SPOTIFY_SECRET,
          };

          const response = await fetch(
            "https://accounts.spotify.com/api/token",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(params),
            });

          const tokensOrError = await response.json();
          if (!response.ok) throw tokensOrError;

          const newTokens = tokensOrError;
          token.access_token = newTokens.access_token;
          token.expires_at = Math.floor(
            Date.now() / 1000 + newTokens.expires_at
          );

          if (newTokens.refresh_token) {
            token.refresh_token = newTokens.refresh_token;
          }
        } catch (error) {
          console.error("Error refreshing access token", error);
          // The error property will be used client-side to handle the refresh token error
          return token.error = "RefreshTokenError";
        }
      }
    },
    async session({session, token}) {
      session.error = "RefreshTokenError"
      session.user.name = token.userName;
      session.user.image = token.userImage;
      session.user.access_token = token.access_token;
      session.user.refresh_token = token.refresh_token;
      return session 
    }
  },
});


