'use client'

import Image from "next/image"
import Link from "next/link"
import clock from "../../../../public/images/icon _clock_.svg"
import { usePathname } from "next/navigation"



//Code not finished. Need a way to make underlined when active..
export default function ResultsNav({props}) {


    const pathname = usePathname();


    console.log(pathname);

    return(
        <div className="p-5 rounded-2xl bg-[#00000040] border border-[#ffffff27] backdrop-blur-md">
        <div className="flex items-center justify-center">
            <Image 
            src={clock}
            alt="results_icon"
            width={28}
            height={28}
            />
            <h3 className="font-bold text-xl text-center pb-2 ml-1"
            >Results</h3>
        </div>
       <ul className=" font-normal list-disc pl-5">
        {props.map((prop)=> {

            const isActive = pathname === prop.link; 
                 return ( 
                    <li key={`${prop.text}`}>
                        <Link href={prop.link} className={isActive ? ' underline font-bold text-lg': 'font-light hover:font-bold'}>{prop.text}</Link>
                </li>
        )})}       
       </ul>
    </div>
    )
}