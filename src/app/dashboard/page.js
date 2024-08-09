import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";
import { Suspense } from "react";


const  state = 'long_term'


//This is the Top Artist card and Data Fetch. Will take a paramter of the useSate result time duration to fetch different data range.
export async function ArtistCard(range) {
    var range = state;
    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=${range}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const artists = await response.json()

    return (
        <div className="font-Inter w-max ml-5 bg-[#ffffff0a] pl-6 pr-4 py-4 rounded-md shadow-md shadow-black backdrop-blur border-[#ffffff10] border">
        <h2 className="text-3xl font-bold text-center pb-4"> Top Artists</h2>
        <ul className="grid grid-cols-4 items-center w-full" >
        {artists.items.map((items) =>(
            <li key={items.id} className="list-decimal list-outside font-bold text-sm mx-2">
                <img className="object-cover h-24 w-24 rounded-md " src={items.images[2].url} />
                <p className="text-xs leading-none font-light pl-2 w-24 h-8">{items.name}</p>
             </li>
        ))}
        </ul>
    </div>
    )


}

export default async function Dashboard() {

    return(
        <main className="mt-24">
            <Suspense fallback={<div> Loading...</div>}>
                <ArtistCard />
            </Suspense>
        </main>
    )
}
