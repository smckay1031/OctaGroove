// ------------------------------------               Side Bar Component (Server)                               -------------------------------------------------
import Image from "next/image"
import ResultsNav from "./resultsNav"
import list from "../../../../public/images/icon _list_.svg"
import { auth } from "../../../auth"



async function getPlaylists() {

    const session = await auth()
    const token = session.user.access_token

    const response = await fetch('https://api.spotify.com/v1/me/playlists?limit=50&offset=0', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    if(response.ok) {
        return response.json();
    } else{
        return null
    }
}



//List of links passed to results sidebar as props 
const results = [
    {  
        link: "/dashboard/range_short",
        text: "Last Week"
    },
    {
        link: "/dashboard/range_medium",
        text: "Last Month"
    },
    {
        link: "/dashboard/range_long",
        text:"Last Year"
    }

]

export default async function SideBar() {

    const playlists = await getPlaylists();

    if(playlists) {
        return(
            <aside className="ml-2 font-Inter felx flex-col z-10" id="sidebar">
            <ResultsNav props={results} />
            <div className="mt-2 py-5 px-1 rounded-xl bg-[#00000080] border border-[#ffffff27] backdrop-blur-md overflow-y-scroll" id="playlistSidebar">
                <div className="flex items-center justify-center pb-2">  
                    <Image 
                    src={list}
                    alt="list_icon"
                    width={16}
                    height={16}
                    />
                    <h4 className="font-bold text-lg ml-2"> PLaylists</h4>
                </div>
                <div className="p-1">
                    <ul className=" overflow-y-scroll">
                        {playlists.items.map((list) =>(
                            <div className="text-sm leading-none py-0.5 pl-5 my-0.5">
                                <li key={list.id} className="capitalize">
                                    <a href={list.uri} target="_blank" className=" no-underline font-extralight hover:font-semibold hover:scale-110 duration-300">{list.name}</a>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
        )
    } else {

        return (
        <div id="sidebar"> No Data</div>
    )
} 
}