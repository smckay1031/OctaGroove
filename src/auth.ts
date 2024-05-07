import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { signIn, signOut, auth } = NextAuth({
    providers: [
        Spotify({
            clientId: process.env.AUTH_SPOTIFY_ID,
            clientSecret: process.env.AUTH_SPOTIFY_SECRET,
        })
    ],
});

