"use client"
import MobileResultsNav from "../nav/mobileResults"
import Image from "next/image"
import NavOn from "../../../../public/images/Align-justified.svg"
import Close from "../../../../public/images/Close.svg"
import Clock from "../../../../public/images/icon _clock_ black.svg"
import {useState, useEffect, use} from "react"
import { delay, motion, useAnimationControls } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"


const containerVariants ={
    close: {x:"-100vw", scale:0.1, opacity:0, transition:{duration: 1.2, type: 'spring', ease:'easeInOut'}}, 
    open: {x:0, scale: 1, opacity: 1, filter:'blur(0px)', transition: {duration: 1.2, type: 'spring', ease:'easeInOut'}},
    before: {y:'25px', opacity:0, filter:'blur(30px)', transition: {duration:0.4, delay:0.8}},
    after: {y:0, opacity:1, filter:'blur(0)', transition: {duration:0.4, delay:0.8}}
}

export default function MobileNav() {

    const pathname = usePathname();
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
//for animation
    const [active, setActive] =useState(false);
    const containerControls = useAnimationControls();
    const listControls = useAnimationControls()

    useEffect(() => {
        if(active) {
            containerControls.start('open')
            listControls.start('after')

        } else{
            containerControls.start('close')
            listControls.start('before')
        }
    }, [active])
//button toggle changes state
    function toggleNav() {
        setActive((active) => !active)
    }

    return (
        <div className="fixed top-16 z-40 w-full px-1 overflow-hidden lg:hidden duration-1000">
            <button onClick={()=> toggleNav()} className="fixed -top-3 left-3">
                <Image
                src={NavOn}
                alt="nav"
                height={28}
                width={28}
                />
            </button>
                <div className="abosulte z-40">
                <motion.div className="p-2 rounded-2xl h-24 text-black border bg-[#18D860] border-[#ffffffa8] backdrop-blur-md flex flex-col items-center justify-center"
                variants={containerVariants}
                initial='close'
                animate={containerControls}> 
                    <motion.div className="flex items-center justify-center"
                    variants={containerVariants}
                    initial='before'
                    animate={listControls}>
                        <Image 
                        src={Clock}
                        alt="results_icon"
                        width={28}
                        height={28}
                        />
                    <p className="font-black text-2xl text-center pb-1">Results</p>
                    </motion.div>
                    <ul className=" inline-flex justify-center gap-2 text-base w-full">
                    {results.map((prop)=> {
                        const isActive = pathname === prop.link; 
                        return ( 
                        <motion.li key={`${prop.text}`}
                        variants={containerVariants}
                        initial='before'
                        animate={listControls}>
                        <Link href={prop.link} className={isActive ? ' underline font-black text-lg': 'font-normal hover:font-bold duration-200'}>{prop.text}</Link>
                        </motion.li>
                    )})}     
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}