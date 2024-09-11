import { auth } from "../../../auth";


//Function to create Top Tracks Card and fetch data 
async function TopTracks(range) {

    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=8&offset=0&time_range=${range}_term`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

// This function coverts ms to a string of min:sec for duration diplay
    function getDuration(time) {

        const min = Math.floor(time / 60000);
        const sec = Math.floor((time % 60000)/1000);

        if(sec > 10){
            return`${min}:${sec}`
        } else if(sec < 10) {
            return `${min}:0${sec}`
        } else {
            return `${min}:00`
        }      
    }

    function Artists(item) {
        const artistsNames = item.artists.map((artist)=>(artist.name))
        const artistList = artistsNames.join(', ')
        return artistList
    }


    const tracks = await response.json();
    
    if(response.ok) {
        return(
            <div className=" flex flex-col font-Inter h-full max-w-full" id="topTracks">
            <h2 className="text-3xl font-bold text-center pb-4"> Top Tracks</h2>
            <div className="bg-[#00000040] rounded-2xl backdrop-blur border-[#ffffff27] border py-4 px-1">
                <div className="flex justify-between text-xs text-center font-semibold">
                    <h3 className="md:w-4/12 w-3/5"> Artist/Song</h3>
                    <h3 className="md:w-2/5 w-1/4 md:pl-10 md:text-center"> Album</h3>
                    <h3 className="md:pr-2"> Duration</h3>
                </div>
                <ol className="p-1">
                    {tracks.items.map((item, index) =>(
                        <div className="" key={item.id}>
                            <li className=" my-1 text-xs leading-none font-light  bg-[#ffffff15] rounded-md shadow-sm shadow-black border-[#ffffff27] border-0.5 pt-0.5 pb-2 min-h-10">
                                <div className="flex justify-between items-center">
                                    <div className="flex md:w-2/5 w-3/5 items-center">
                                        <p className="p-1 font-semibold md:text-base text-sm">{`${index + 1}.`}</p>
                                        <img src={item.album.images[2].url} alt="album" className="w-6 h-6 mx-1 rounded-md" />
                                        <div className="h-9 flex flex-col">
                                            <a  href={item.uri} className=" h-6 font-normal text-sm md:text-base hover:underline hover:font-semibold duration-500"><p className="block h-6 overflow-clip py-0.5">{item.name}</p></a>
                                            <p className="h-3 overflow-hidden font-light leading-4">{Artists(item)}</p>
                                        </div>
                                    </div>
                                    <p className="md:w-4/12 w-1/4 md:text-center justify-center overflow-hidden max-h-8 font-normal text-sm leading-4">{item.album.name}</p>
                                    <p className="h-full flex items-center md:pr-2 pr-1 md:text-base text-sm font-normal"> {getDuration(item.duration_ms)}</p>
                                </div>
                            </li>
                        </div>
                    ))}
                </ol>
            </div>
        </div> 
        )
    }
}
//Last Week
export function TopTracksShort() {
    return TopTracks('short')
}
//Last 6 months
export function TopTracksMed() {
    return TopTracks('medium')
}
//Last Year
export function TopTracksLong(){
    return TopTracks('long')
}
