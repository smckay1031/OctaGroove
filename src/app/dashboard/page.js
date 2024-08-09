import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";



export default async function Dashboard() {

    const session = await auth();
    const token = session.user.access_token
    

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const artists = await response.json()
    console.log(artists);


    return(
        <main>
        <h1 className=" mt-32 p-10">Dashboard</h1>

        <div className="font-Inter w-96">
            <h2 className="font-Inter text-xl font-semibold"> Top Artists</h2>
        <div className="grid grid-cols-4 gap-2 items-center" >
            {artists.items.map((items) =>(
                <div key={items.id} className="w-24 h-40">
                    <img className="object-fill h-4/6" src={items.images[2].url} />
                    <p className="text-sm font-light">{items.name}</p>
                </div>
            ))}
        </div>
       
        </div>
    </main>
    )
}
