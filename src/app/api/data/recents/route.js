import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token;

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50',{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    )
    const data = await response.json();
    return Response.json(data)
}