import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";



export default async function Dashboard() {

    const session = await auth();
    const token = session.user.access_token
    const shortTerm = 'short_term';
    const medTerm = 'medium_term';
    const longTerm = 'long_term';

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=${medTerm}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const artists = await response.json()

    return(
        <main className="mt-16">
        <div className="font-Inter w-max ml-5 bg-[#ffffff0a] px-4 pb-4 rounded-md shadow-md backdrop-blur border-[#ffffff10] border">
            <h2 className="text-3xl font-bold text-center py-4"> Top Artists</h2>
            <ul className="grid grid-cols-4 items-center w-full gap-2" >
            {artists.items.map((items) =>(
                <li key={items.id} className="list-decimal list-inside">
                    <img className="object-cover h-24 w-24 rounded-md " src={items.images[2].url} />
                    <p className="text-xs leading-tight">{items.name}</p>
                 </li>
            ))}
            </ul>
        </div>
    </main>
    )
}
