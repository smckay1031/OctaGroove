
import Image from "next/image"
import SpotifyLogo from "../../../../lib/images/Spotify_Logo.svg"
import { signIn } from "../../../auth";

export function Button() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("spotify", {redirectTo: "/dashboard"})
            }}
            >
            <button className="bg-[#18D860] p-3 rounded-3xl inline-flex justify-center items-center" >
                <Image 
                src={SpotifyLogo}
                alt="Spotify"
                width={28}
                height={28}
                />
                 <p className="text-slate-950 font-extrabold px-2">Login with Spotify </p>
            </button>
        </form>
    );
}