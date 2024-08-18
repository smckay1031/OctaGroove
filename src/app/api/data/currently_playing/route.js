

import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token;

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing',{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }, 
    {next: { revalidate: 60 } }
    )
    const data = await response.json();
    return Response.json(data)
}