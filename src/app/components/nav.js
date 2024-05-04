import React from "react";

export function NavBar() {
    return (
        <header className=" relative flex justify-center items-center font-Inter">
            <div id='logo' className= "fixed top-0 p-5 w-full inline-flex justify-between items-center bg-slate-100 bg-opacity-5 border-b border-l border-slate-400 shadow-slate-700 shadow-xl backdrop-blur-lg ">
                <div className="flex gap-1 items-center">
                <span className="font-semi-bold text-5xl font-Monoton">O</span>    
                <p className="flex flex-wrap w-8 leading-5 font-bold text-2xl">Octo Groove</p>
                </div>
               <nav> 
                    <ul className="inline-flex gap-3 justify-center items-center cursor-pointer">
                        <li> Home</li>
                        <li> Dashboard</li>
                        <li> About</li>
                    </ul>
                </nav>
                <button className="py-3 px-5 bg-green-500 rounded-2xl ">Sign in </button>
            </div>
        </header>
    )
}

