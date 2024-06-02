import { signIn, auth } from "../../auth";

export function SignIn() {
    return (
        <form action={async () => {
            'use server'
            await signIn("Spotify", { redirectTo: "/dashboard"})
        }}
        >
            <button type="submit" className="py-3 px-5 bg-green-500 rounded-2xl text-md w-24 font-bold"> Login </button>
        </form>
    )
}