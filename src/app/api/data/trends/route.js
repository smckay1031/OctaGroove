
import { auth } from "../../../../auth"

export async function GET() {
    const session = await auth()
    const token = session.user.access_token; 
    const range = 'short';

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=${range}_term`,{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })



    const data = await response.json();
     
    function topGenres(data) {
        let genreSort = [];
        let genreTotal = [];

        const genres = data.items.map((artist) =>{
            const sort = artist.genres.map((arr)=> {
                if(!genreSort.includes(arr)){ 
                    genreSort.push(arr);
                    genreTotal.push(arr)
                    } else{
                        return genreTotal.push(arr)
                    }
                })
            return sort
            })

        genres
        const listSorted = genreSort.flat()

        return listSorted
            
        }
        
    return Response.json(topGenres(data));

}
