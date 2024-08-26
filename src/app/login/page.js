//Login Page
import { NavBar } from "../components/nav/nav"
import { Button } from "../components/auth/loginButton"



export default function Login() {
    return (
    <>
        <div className="flex items-center justify-center w-full h-screen relative top-0">
            <div id="absoluteBottom"> <a className="opacity-0"> a</a></div>
            <div className="bg-[#00000025] backdrop-blur-lg p-14 z-30 rounded-3xl border-[#ffffff27] border h-96 max-w-xl flex justify-center items-center flex-col">
                <h1 className="font-medium text-5xl font-Monoton text-center my-10 opacity-95">OctaGroove</h1>
                <h2 className="my-5 font-medium opacity-95 text-lg"> Sign In</h2>
                <div className="flex-col items-center justify-center text-center">
                    <Button />
                </div>
            </div>
        </div>
    </>
    )
}

