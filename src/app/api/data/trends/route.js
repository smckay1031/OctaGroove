
import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token; 
    let range = 'short'

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=${range}_term`,{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const data = await response.json();
     
    const genres = data.items.map((artist) =>{
        
    
    const genreList = artist.genres.map((genre)=> genre);

    return genreList
    })
    
    return Response.json(genres);

}
