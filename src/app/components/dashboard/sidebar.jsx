


export default async function SideBar() {


    return(
        <aside className="w-36 ml-2 mt-5">
            <div className="rounded-md p-5 bg-[#ffffff05] border border-[#ffffff10]">
               <h2 className="font-bold text-lg">Results</h2>
               <ul className=" font-normal text-sm list-disc">
                   <li>Last Month</li>
                   <li>Last 6 Monts</li>
                   <li>Last Year</li>
               </ul>
            </div> 
        </aside>
    )
}