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


    const tracks = await response.json();
    
    return(
        <div className=" flex flex-col h-72 p-1 font-Inter bg-[#80808005] rounded-lg shadow-md shadow-black backdrop-blur border-[#ffffff27] border" id="topTracks">
            <h2 className="text-2xl font-bold text-center"> Top Tracks</h2>
            <div className="flex justify-around text-xs text-center font-semibold">
                <h3 className="w-4/12"> Artist/Song</h3>
                <h3 className="w-2/5 pl-10"> Album</h3>
                <h3 className=""> Duration</h3>
            </div>
            <ul className="p-1 overflow-y-scroll">
                {tracks.items.map((item) =>(
                    <div className="pl-4">
                        <li key={item.id} className="list-decimal list-outisde my-1 py-0.5 text-xs leading-none font-light  bg-[#ffffff0b] rounded-md shadow-sm shadow-black backdrop-blur border-[#ffffff27] border-0.5">
                            <div className="flex justify-around items-center">
                                <div className="flex w-5/12">
                                    <img src={item.album.images[2].url} alt="album" className="w-6 h-6 mr-1" />
                                    <div className="flex flex-col h-7">
                                        <p className="h-3 overflow-hidden mb-1 font-normal">{item.name}</p>
                                        <p className="h-1/2 overflow-hidden">{item.artists[0].name}</p>
                                    </div>
                                </div>
                                <p className="w-2/5 flex justify-center items-center overflow-hidden min-h-8">{item.album.name}</p>
                                <p className="h-full flex items-center"> {getDuration(item.duration_ms)}</p>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
        
    )
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
