
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
        let genreShort = [];
        let genreTotal = [];
        class GenreData {
            constructor(name, count) {
                this.name = name
                this.count = count 
            }
        }
        const genres = data.items.map((artist) =>{
            const sort = artist.genres.map((arr)=> {
                if(!genreShort.includes(arr)){ 
                    genreShort.push(arr);
                    genreTotal.push(arr)
                    } else{
                        return genreTotal.push(arr)
                    }
                })
            return sort
            })

        genres
        const newShort = genreShort.flat()
        const newTotal = genreTotal.flat();

        function makeGenreData(arr1, arr2){
            let data = []
            const count = arr1.forEach((genre) => {

                const countArr = arr2.filter((item)=> genre === item)
                console.log(countArr)
            });
            return count
        }
        makeGenreData(newShort, newTotal)
        return newShort.sort()
        }
        
    return Response.json(topGenres(data));

}
