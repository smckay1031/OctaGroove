import Link from "next/link"
import Image from "next/image"
import ResultsNav from "./resultsNav"
import list from "../../../../public/images/icon _list_.svg"
import { auth } from "../../../auth"



async function getPlaylists() {

    const session = await auth()
    const token = session.user.access_token

    const response = await fetch('https://api.spotify.com/v1/me/playlists?offset=0', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return response.json();
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

    return(
        <aside className="ml-2 font-Inter felx flex-col" id="sidebar">
            <ResultsNav props={results} />
            <div className="mt-2 py-5 px-1 rounded-md bg-[#80808005] border border-[#ffffff27] overflow-y-scroll" id="playlistSidebar">
                <div className="flex items-center justify-center pb-2">  
                    <Image 
                    src={list}
                    alt="list_icon"
                    width={16}
                    height={16}
                    />
                    <h4 className="font-bold text-lg ml-2"> PLaylists</h4>
                </div>
                <div>
                    <ul className="">
                        {playlists.items.map((list) =>(
                            <div className="text-xs leading-none py-1 pl-5 my-0.5 list-disc rounded-md bg-[#ffffff0a]">
                                <li key={list.id} className="">{list.name}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}