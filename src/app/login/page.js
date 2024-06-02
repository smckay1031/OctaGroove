import { SignIn } from "../../components/ui/loginButton";
import { signIn, auth } from "../../auth";

export default function Login() {
    return (
        <main className="h-96 flex flex-col items-center justify-center">
            <h1 className="text-5xl my-10 font-bold font-Inter">Welcome to OctoGroove</h1>
            <div className="flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold font-Inter">Login with Spotify</h2>
                <SignIn />
            </div>
        </main>
    )
}