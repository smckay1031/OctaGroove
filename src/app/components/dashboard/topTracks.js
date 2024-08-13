import { auth } from "../../../auth";

export async function TopTracksShort() {

    const session = await auth();
    const token = session.user.access_token

    const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=8&offset=0&time_range=short_term', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const tracks = await response.json()
    console.log(tracks)

    return(
        <div className="h-72 px-2 overflow-y-scroll font-Inter bg-[#80808005] rounded-md shadow-md shadow-black backdrop-blur border-[#ffffff27] border">
            <h2 className="text-2xl font-bold text-center py-2"> Top Tracks</h2>
            <table>
                <tr className="text-sm">
                    <th> </th>
                    <th>Song/Artist</th>
                    <th>Album</th>
                    <th>Duration</th>
                </tr>
            {tracks.items.map((items) =>(
                    <tr className=" h-6" key={items.id}>
                        <td className=""> 
                            <img className="h-6 w-6" src={items.album.images[2].url} />
                        </td>
                        <td className="text-xs leading-none font-extralight w-44">
                            <p className="p-1">{items.name}</p>
                            <p className="font-extralight">{items.artists[0].name}</p>
                        </td>
                        <td className="text-xs font-extralight leading-none w-48 overflow-hidden"> {items.album.name}</td>
                        <td className="text-xs font-extralight h-8 w-12">{items.duration_ms}</td>
                    </tr>
            ))}
                </table>
        </div>
    )

}