import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";



export default async function Dashboard() {

    const session = await auth();
    const token = session.user.access_token
    const shortTerm = 'short_term';
    const mediumTerm = 'medium_term';
    const longTerm = 'long_term';

    const response = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=${longTerm}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const artists = await response.json()
    console.log(artists);


    return(
        <main>
        <h1 className=" mt-32 p-10">Dashboard</h1>

        <div className="font-Inter w-5/12 ml-5">
            <h2 className="font-Inter text-xl font-bold text-center py-5"> Top Artists</h2>
            <ul className="grid grid-cols-4 items-center w-full" >
            {artists.items.map((items) =>(
                <li key={items.id} className="list-decimal list-outside m-1">
                    <img className="object-cover h-24 w-24 rounded-md " src={items.images[2].url} />
                    <p className="text-xs leading-tight p-1">{items.name}</p>
                 </li>
            ))}
            </ul>
        </div>
    </main>
    )
}
