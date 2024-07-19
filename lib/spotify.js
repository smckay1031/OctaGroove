/// This is a file used to creat the auth login URL for Spotify with propper scopes.

const scopes = [
    'user-read-email',
    'user-read-private',
    //Spotify Connect:
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    // Playback:
    'app-remote-control',
    'streaming',
    //Playlists:
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    //Follow:
    'user-follow-modify',
    'user-follow-read',
    //Listening History:
    'user-read-playback-position',
    'user-top-read',
    'user-read-recently-played',
    //Library:
    'user-library-modify',
    'user-library-read',
].join(",")

const authLoginURL = "https://accounts.spotify.com/authorize?"

const authURL = `${authLoginURL}scope=${scopes}`;

export default authURL;
