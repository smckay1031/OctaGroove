//Login Page
import { NavBar } from "../components/nav/nav"
import { Button } from "../components/auth/loginButton"



export default function Login() {
    return (
    <>
        <div className="flex items-center justify-center w-full h-screen top-0 relative">
            <div id="absoluteBottom"> <a className="opacity-0"> a</a></div>
            <div className="bg-[#00000035] p-14 z-30 rounded-3xl border-[#ffffff27] border max-w-xl flex justify-center items-center flex-col">
                <h1 className="lg:text-5xl text-3xl font-Monoton text-center my-10 opacity-95">OctaGroove</h1>
                <h2 className="lg:my-5 my-2 font-semibold opacity-95 lg:text-lg"> Sign In</h2>
                <div className="flex-col items-center justify-center text-center">
                    <Button />
                </div>
            </div>
        </div>
    </>
    )
}

