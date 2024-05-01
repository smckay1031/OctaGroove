import React from "react";

export function NavBar() {
    return (
        <header className=" relative flex justify-center items- center font-Inter">
            <div className= "fixed top-5 p-5 w-11/12 inline-flex justify-between items-center bg-transparent border-b border-l shadow-slate-600 shadow-md rounded-2xl backdrop-blur-lg ">
                <ul className="inline-flex gap-3 justify-center items-center">
                    <li> Home</li>
                    <li> Dashboard</li>
                    <li> About</li>
                </ul>
                <button className="py-3 px-5 bg-green-500 rounded-2xl ">Sign in </button>
            </div>
        </header>
    )
}

