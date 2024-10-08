'use client'

import Image from "next/image"
import Link from "next/link"
import clock from "../../../../public/images/icon _clock_.svg"
import { usePathname } from "next/navigation"



//Code not finished. Need a way to make underlined when active..
export default function ResultsNav({props}) {


    const pathname = usePathname();

    return(
        <div className="p-5 rounded-2xl bg-[#00000080] border border-[#18d8625e] backdrop-blur-md shadow-2xl shadow-[#18d86223] ">
        <div className="flex items-center justify-center">
            <Image 
            src={clock}
            alt="results_icon"
            width={28}
            height={28}
            />
            <h3 className="font-bold text-xl pb-2 ml-1 w-full"
            >Results</h3>
        </div>
       <ul className=" font-normal list-disc pl-5">
        {props.map((prop)=> {

            const isActive = pathname === prop.link; 
                 return ( 
                    <li key={`${prop.text}`}>
                            <Link href={prop.link} className={isActive ? ' underline font-bold text-lg text-[#18D860]': 'font-light hover:font-bold duration-200'}>{prop.text}</Link>
                </li>
        )})}       
       </ul>
    </div>
    )
}