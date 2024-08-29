'use client'

import Image from "next/image"
import Link from "next/link"
import Clock from "../../../../public/images/icon _clock_ black.svg"
import { usePathname } from "next/navigation"
import { motion, inView } from "framer-motion"


export default function MobileResultsNav({props}) {


    const pathname = usePathname();

    return(
        <div className="p-2 rounded-2xl h-24 text-black border bg-[#18D860] border-[#ffffffa8] backdrop-blur-md flex flex-col items-center justify-center"> 
        <div className="flex items-center justify-center">
            <Image 
            src={Clock}
            alt="results_icon"
            width={28}
            height={28}
            />
            <motion.h3 className="font-black text-2xl text-center pb-1"
            >Results</motion.h3>
        </div>
       <ul className=" inline-flex justify-center gap-2 text-base w-full">
        {props.map((prop)=> {
            const isActive = pathname === prop.link; 
                 return ( 
                    <motion.li key={`${prop.text}`}>
                        <Link href={prop.link} className={isActive ? ' underline font-black text-lg': 'font-normal hover:font-bold duration-200'}>{prop.text}</Link>
                </motion.li>
        )})}       
       </ul>
    </div>
    )
}