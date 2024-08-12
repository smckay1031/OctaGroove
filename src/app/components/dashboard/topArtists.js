
import { auth } from "../../../auth";

//These are the server component for Top Artists short is within last few weeks, medium is within last 6 months, and long is in last year:

//Last week
export  async function ArtistShort() {
    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=short_term', {
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
                <p className="text-xs leading-none font-light pr-4 w-24 h-8">{items.name}</p>
             </li>
        ))}
        </ul>
    </div>
    )
}

//last 6months

export async function ArtistMed() {
    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=medium_term', {
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
                <p className="text-xs leading-none font-light pr-4 w-24 h-8">{items.name}</p>
             </li>
        ))}
        </ul>
    </div>
    )
}

//last year  

export async function ArtistLong() {
    const session = await auth();
    const token = session.user.access_token;

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0&time_range=long_term', {
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
                <img className="object-cover h-24 w-24 rounded-md" src={items.images[2].url} />
                <p className="text-xs leading-none font-light pr-4 w-24 h-8">{items.name}</p>
             </li>
        ))}
        </ul>
    </div>
    )
}