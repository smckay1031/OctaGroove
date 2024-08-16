import Link from "next/link"
import Image from "next/image"
import Clock  from "../../../../public/images/🦆 icon _clock_.jpg"
import list from "../../../../public/images/🦆 icon _list_.jpg"


export default async function SideBar() {


    return(
        <aside className="ml-2" id="sideBar">
            <div className="p-5 rounded-md bg-[#80808005] border border-[#ffffff27]">
                <div>
                    <Image 
                    src={Clock}
                    />
                    <h2 className="font-bold text-xl text-center pb-2">Results</h2>
                </div>
               <ul className=" font-normal list-disc pl-5">
                   <li>
                    <Link href={"/dashboard/range_short"} className="hover:font-bold active:opacity-60">Last Week</Link>
                   </li>
                   <li>
                    <Link href={"/dashboard/range_medium"} className="hover:font-bold active:opacity-60"> Last 6 Months</Link>
                    </li>
                   <li>
                    <Link href={"/dashboard/range_long"} className="hover:font-bold active:opacity-60">Last Year</Link>
                   </li>
               </ul>
            </div> 
        </aside>
    )
}