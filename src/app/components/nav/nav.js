import React from "react";
import Link from "next/link";


export function NavBar() {
    return (
        <header className=" relative flex justify-center items-center font-Inter">
            <div id='logo' className= "fixed top-0 py-2 px-5 w-full inline-flex justify-between items-center bg-slate-100 bg-opacity-5 border-b border-l border-slate-4 backdrop-blur-lg ">
                <div className="flex gap-1 items-center">
                <span className="font-semi-bold text-5xl font-Monoton">O</span>    
                <p className="flex flex-wrap w-8 leading-5 font-bold text-2xl">Octo Groove</p>
                </div>
               <nav> 
                    <ul className="inline-flex gap-3 justify-center items-center cursor-pointer">
                        <li className="hover:font-semibold">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="hover:font-semibold"> 
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li className="hover:font-semibold"> 
                            <Link href={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

