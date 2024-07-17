//Login Page
import { signIn } from "../../auth"
import { Button } from "../components/auth/loginButton"



export default async function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="bg-[#18D860] p-14 rounded-3xl bg-opacity-5 shadow-lg shadow-[#18d88537] border-[#18d86259] border h-96 max-w-xl flex justify-center items-center flex-col">
                <h1 className="text-3xl my-10 font-bold font-Inter">Sign In To <a className="font-medium text-5xl font-Monoton">OctoGroove</a></h1>
                <div className="flex-col items-center justify-center text-center">
                    <Button />
                </div>
            </div>
        </div>
    )
}

