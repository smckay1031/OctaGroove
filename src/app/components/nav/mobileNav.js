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
import { M_PLUS_1 } from "next/font/google"


const containerVariants ={
    close: {x:"-100vw", scale:0.1, opacity:0, transition:{duration: 1.2, type: 'spring', ease:'easeInOut'}}, 
    open: {x:0, scale: 1, opacity: 1, filter:'blur(0px)', transition: {duration: 1.2, type: 'spring', ease:'easeInOut'}},
    before: {y:'-10px', opacity:0.2, filter:'blur(20px)', transition: {duration:0.1, delay:0.1}},
    after: {y:0, opacity:1, filter:'blur(0)', transition: {duration: 0.4, delay:0.8}}
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
        <div className="fixed top-16 z-40 w-full px-1 lg:hidden">
            <button onClick={()=> toggleNav()} className="fixed -top-3 left-3 p-2">
                {!active && (
                    <Image
                    src={NavOn}
                    alt="nav"
                    height={28}
                    width={28}
                    />
                )}
                {active && (
                <Image
                src={Close}
                alt="close"
                height={28}
                width={28}
                className="pt-5"
                />
                )}
            </button>
                <div className="abosulte z-40">
                <motion.div className="py-2 pl-5 rounded-2xl h-24 text-[white] border bg-[00000] border-[#18d8625e] backdrop-blur-md flex flex-col justify-center items-center w-full shadow-2xl shadow-[#18d86223]"
                variants={containerVariants}
                initial='close'
                animate={containerControls}> 
                    <motion.div className="flex items-center w-full"
                    variants={containerVariants}
                    initial='before'
                    animate={listControls}>
                        <Image 
                        src={Clock}
                        alt="results_icon"
                        width={28}
                        height={28}
                        className="mr-1"
                        />
                    <p className="font-black text-2xl text-center pb-1">Results</p>
                    </motion.div>
                    <ul className=" inline-flex items-center gap-2 text-base w-full px-2">
                    {results.map((prop)=> {
                        const isActive = pathname === prop.link; 
                        return ( 
                        <motion.li key={`${prop.text}`}
                        variants={containerVariants}
                        initial='before'
                        animate={listControls}
                        >
                        <Link href={prop.link} className={isActive ? ' underline font-black text-lg text-[#18D860]': 'font-normal hover:font-bold duration-200'}>{prop.text}</Link>
                        </motion.li>
                    )})}     
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}