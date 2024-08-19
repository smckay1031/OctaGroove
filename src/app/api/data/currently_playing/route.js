

import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token;

    const data = await fetch('https://api.spotify.com/v1/me/player/currently-playing',{
        headers: {
            'Authorization': 'Bearer ' + token
        },
    }).then((res)=> res.json())

    return Response.json(data)
}