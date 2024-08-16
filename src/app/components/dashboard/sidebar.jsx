import Link from "next/link"
import Image from "next/image"
import ResultsNav from "./resultsNav"
import list from "../../../../public/images/icon _list_.svg"


async function getPlaylists() {

    return
}
//List of links passed to results sidebar as props 
const results = [
    {  
        link: "/dashboard/range_short",
        text: "Last Week"
    },
    {
        link: "/dashboard/range_medium",
        text: "Last 6 Months"
    },
    {
        link: "/dashboard/range_long",
        text:"Last Year"
    }

]

export default async function SideBar() {

    return(
        <aside className="ml-2 font-Inter" id="sidebar">
            <ResultsNav props={results} />
            <div className="mt-2 p-5  rounded-md bg-[#80808005] border border-[#ffffff27]" id="playlistSidebar">
                <div className="flex items-center justify-center">  
                    <Image 
                    src={list}
                    alt="list_icon"
                    width={16}
                    height={16}
                    />
                    <h4 className="font-bold text-lg ml-2"> PLaylists</h4>
                </div>
            </div>
        </aside>
    )
}