import { cache } from "react";
import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token;
    

    const seedResponse =  await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&offset=5&time_range=medium_term',{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }, 
    {next: {revalidate: 1800} }
    )   
    const seed = await seedResponse.json()

    function getIDs(obj) {
        const IDs = obj.items.map((o)=>(o.id))
        return IDs
    }

    const seedList = getIDs(seed).join(',')

    const reccomend = await fetch(`https://api.spotify.com/v1/recommendations?limit=24&seed_tracks=${seedList}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }, 
    {next: {revalidate: 1800} }
    )

    const reccomendations = await reccomend.json() 

    return  Response.json(reccomendations);
}