import React from "react";
import Link from "next/link";
import { NavButton} from "../auth/MultiFunctionButton";

export  async function NavBar() {
    return (
        <header className=" font-Inter flex items-center justify-center">
            <div className= "py-1 px-5 w-full inline-flex justify-between items-center bg-transparent">
                <div className="flex gap-1 items-center">
                    <span className="font-semi-bold text-5xl font-Monoton">O</span>    
                </div>
               <nav className=""> 
                    <ul className="inline-flex gap-4 justify-center items-center cursor-pointer">
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
                <NavButton />
            </div>
        </header>
    )
}

