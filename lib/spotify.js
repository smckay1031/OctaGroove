/// This is a file used to creat the auth login URL for Spotify with propper scopes.

const scopes = [
    'user-read-email',
    'user-read-private',
    //Spotify Connect:
    'user-read-currently-playing',
    // Playback:
    //Playlists:
    'playlist-read-private',
    'playlist-read-collaborative',
    //Follow:
    'user-follow-modify',
    'user-follow-read',
    //Listening History:
    'user-top-read',
    'user-read-recently-played',
    //Library:
    'user-library-read',
].join(",")

const authLoginURL = "https://accounts.spotify.com/authorize?"

const authURL = `${authLoginURL}scope=${scopes}`;

export default authURL;
