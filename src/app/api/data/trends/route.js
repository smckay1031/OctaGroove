
import { auth } from "../../../../auth"


// This is an api endpoint to distribute json data for the recharts to show graph data 
export async function GET() {
    const session = await auth()
    const token = session.user.access_token; 
    const range = 'short';
//Above getting/checking auth and below we are fetching the top artists from spotify
    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=${range}_term`,{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const data = await response.json();

    function topGenres(data) {
    //new Arrays to contain lists of our top Artists genres, 
        let genreShort = [];
        let genreTotal = [];


        class Data {
            constructor(name, count) {
                this.genre = name;
                this.count = count;
            }
        }
        //We are creating two array lists: one with and one without repeats of our top artists genres
        const genres = data.items.map((artist) =>{
            const sort = artist.genres.map((arr)=> {
                if(!genreShort.includes(arr)){ 
                    genreShort.push(arr);
                    genreTotal.push(arr)
                    } else{
                    genreTotal.push(arr)
                    }
                })
            return sort
            })

        genres
        const newShort = genreShort.flat().sort()
        const newTotal = genreTotal.flat().sort()

        /*This f(x) we are compairing the two lists above:
            newShort is a short array of the genres our top artists are associated with,
            newTotal is an array with repeats of all of the genres our topArtists are associated with.
            We are counting the number repeats a genre has to see how popular it is. then it will be converted into string-->json for API to display;
            Recharts needs this json data this way for our trends graph. */

        function makeGenreData(arr1, arr2){
            const genreObject = [];
            const getCount = arr1.forEach((genre) => {
                const counter = arr2.filter((item)=> genre === item)
                const count = counter.length
                const stringObject = `{"name": "${genre}", "count": "${count}"}`
                return genreObject.push(stringObject)
            });
            getCount//run this f(x)
            const objectInsert = genreObject.join(', ')
            const jsonString = `{"genres": [`+ `${objectInsert}`+ "]}"
            const GenereData = JSON.parse(jsonString)
            return GenereData
                 
            }

        return makeGenreData(newShort, newTotal)
    }
           
    return Response.json(topGenres(data));
}
