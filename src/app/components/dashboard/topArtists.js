
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
            <div className=" font-Inter flex flex-col items-center justify-center" id="topArtists">
                <h2 className="text-3xl font-bold pb-4"> Top Artists</h2>
                <ul className="grid grid-cols-4 gap-2 items-center justify-center w-full rounded-2xl backdrop-blur border-[#ffffff27] border bg-[#00000040] lg:px-8 px-4 py-14" >
                    {artists.items.map((item) =>(
                    <li key={item.id} className=" flex flex-col items-center justify-center list-decimal list-outside font-bold text-sm mx-2 hover:scale-110 duration-300">
                    <img className="object-cover lg:h-24 lg:w-24 h-18 w-18 mb-2 rounded-2xl" src={item.images[1].url} alt="top_artist" />
                    <a href={item.uri} className="text-sm leading-none font-normal pr-2 h-8 hover:underline">{item.name}</a>
                    </li>
                    ))}
                </ul>
            </div>
        )}
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
