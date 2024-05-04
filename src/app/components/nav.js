import React from "react";

export function NavBar() {
    return (
        <header className=" relative flex justify-center items- center font-Inter">
            <div className= "fixed top-5 p-5 w-11/12 inline-flex justify-between items-center bg-slate-100 bg-opacity-5 border-b border-l shadow-slate-600 shadow-md rounded-2xl backdrop-blur-lg ">
                <p className="flex flex-wrap w-8 leading-4 font-bold">Octo Groove</p>
                <ul className="inline-flex gap-3 justify-center items-center cursor-pointer">
                    <li> Home</li>
                    <li> Dashboard</li>
                    <li> About</li>
                </ul>
                <button className="py-3 px-5 bg-green-500 rounded-2xl ">Sign in </button>
            </div>
        </header>
    )
}

