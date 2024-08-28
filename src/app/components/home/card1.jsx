import Link from "next/link"



export default function Card({prop}) {

    return(
        <div className="p-5 flex flex-col items-center justify-center border-2 border-[#ffffff40] rounded-xl max-w-64 bg-[#18d862] text-black font-Inter">
            <h3 className="text-3xl font-black py-5 w-full">{prop.header}</h3>
            <p className="text-sm leading-none font-medium pb-5 w-full ">{prop.body}</p>
            <Link href={"/dashboard/range_short"} className="font-bold border-1 border-[#ffffff40] py-2 px-4 rounded-3xl backdrop-blur-xl bg-[#000000] text-white hover:scale-110 active:opacity-80 ease-in-out duration-200"> See More</Link>

        </div>
    )
}

