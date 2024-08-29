import React from "react";
import Link from "next/link";
import { NavButton} from "../auth/MultiFunctionButton";

export  async function NavBar() {
    return (
        <header className=" font-Inter flex items-center justify-center lg:absolute fixed top-0 z-40 px-1 w-full">
            <div className= "py-2 px-5 w-full inline-flex justify-between items-center backdrop-blur-md bg-[#00000005] border-[#ffffff35] border-b rounded-2xl">
                <div className="flex gap-1 items-center">
                    <span className="font-semi-bold text-5xl font-Monoton lg:block hidden">O</span>    
                </div>
               <nav className=""> 
                    <ul className="inline-flex gap-4 justify-center items-center cursor-pointer lg:text-xl text-sm">
                        <li className="hover:font-semibold duration-200">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="hover:font-semibold duration-200"> 
                            <Link href={"/dashboard/range_short"}>Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                <NavButton />
            </div>
        </header>
    )
}

