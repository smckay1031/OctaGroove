//Login Page
import { NavBar } from "../components/nav/nav"
import { Button } from "../components/auth/loginButton"



export default function Login() {
    return (
    <>
    <NavBar  />
        <div className="flex flex-col items-center justify-center w-full mt-5">
            <div className="bg-[#808080] p-14 rounded-3xl bg-opacity-5 shadow-lg shadow-[#18d8857e] border-[#ffffff27] border h-96 max-w-xl flex justify-center items-center flex-col">
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

