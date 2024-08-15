import Link from "next/link"


export default async function SideBar() {


    return(
        <aside className="w-36 ml-2">
            <div className="rounded-md p-5 bg-[#80808005] border border-[#ffffff27]">
               <h2 className="font-bold text-lg">Results</h2>
               <ul className=" font-normal text-sm list-disc">
                   <li>
                    <Link href={"/dashboard/range_short"}>Last Week</Link>
                   </li>
                   <li>
                    <Link href={"/dashboard/range_medium"}> Last 6 Months</Link>
                    </li>
                   <li>
                    <Link href={"/dashboard/range_long"}>Last Year</Link>
                   </li>
               </ul>
            </div> 
        </aside>
    )
}