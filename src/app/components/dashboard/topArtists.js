
import { auth } from "../../../auth";

//These are the server component for Top Artists short is within last few weeks, medium is within last 6 months, and long is in last year:

//This is the Component function for the top artist card and data Fetching 
async function GetTopArtist(range) {
    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=${range}_term`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const artists = await response.json()

    if(response.ok) {

        return (
            <div className=" h-80 font-Inter bg-[#00000040] pl-6 pt-2 pb-5 rounded-3xl shadow-md shadow-black backdrop-blur border-[#ffffff27] border flex flex-col items-center justify-center" id="topArtists">
                <h2 className="text-2xl font-bold mb-6"> Top Artists</h2>
                <ul className="grid grid-cols-4 items-center justify-center w-full h-max px-16" >
                    {artists.items.map((item) =>(
                    <li key={item.id} className="list-decimal list-outside font-bold text-sm mx-2">
                    <img className="object-cover h-28 w-28 rounded-md " src={item.images[2].url} />
                    <p className="text-sm leading-none font-normal pr-2 w-24 h-8">{item.name}</p>
                    </li>
                    ))}
                </ul>
            </div>
        )}
        if(!response.ok) {
            return (
                <div className=" h-72 font-Inter bg-[#80808005] pl-6 pt-2 pb-5 rounded-3xl shadow-md shadow-black backdrop-blur border-[#ffffff27] border flex flex-col items-center justify-center" id="topArtists">
                    <p>Unable to Fetch Data</p>
                </div>
            )
        }
}
//Last Week
export function ArtistShort() {
    return GetTopArtist('short')
}
//Last 6 months
export function ArtistMed() {
    return GetTopArtist('medium')
}
//Last Year
export function ArtistLong(){
    return GetTopArtist('long')
}
