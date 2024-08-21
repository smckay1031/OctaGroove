import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token;

    const seedResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0',{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const seed = await seedResponse.items.filter((item)=> item.id);
    return Response.json(seed)
}