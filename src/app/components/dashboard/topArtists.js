
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
            <div className=" font-Inter flex flex-col items-center justify-center md:mt-0 mt-5" id="topArtists">
                <h2 className="text-3xl font-bold pb-4"> Top Artists</h2>
                <ul className=" grid grid-cols-4 justify-center items-center rounded-2xl w-full border-[#ffffff27] border bg-[#00000040] py-10 md:px-2 2xl:px-10" >
                    {artists.items.map((item, index) =>(
                    <li key={item.id} className="flex flex-col items-center font-bold text-sm hover:scale-110 duration-300 mb-4">
                    <a href={item.uri} className="xl:w-32 sm:w-24 w-20 ">
                        <img className="object-cover xl:h-32 xl:w-32 sm:h-24 sm:w-24 h-20 w-20 mb-2 rounded-2xl justify-center items-center" src={item.images[1].url} alt="top_artist" />
                        <div className=" h-8 xl:w-32 sm:w-24 w-20">
                            <p className="lg:text-base text-xs md:font-semibold font-normal leading-none hover:underline">{index +1}.  {item.name}</p>
                        </div>
                    </a>    
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
