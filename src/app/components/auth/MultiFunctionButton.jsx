import {auth, signIn, signOut} from "../../../auth";
import Image from "next/image";

export async function NavButton() {
    const session = await auth();
    
    if(!session) {
        return (
            <form
            action={async () => {
              "use server"
              await signIn("spotify")
            }}
          >
            <button type="submit" className="inline-flex justify-center items-center rounded-full bg-slate-950 text-xs h-8 w-24 ">Sign In</button>
          </form>
        )
    }

    else if(session.user) {
        return (
            <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button type="submit" className="inline-flex justify-center items-center rounded-full bg-slate-950 text-xs ">
                <img src={session.user.image} className="h-10 w-10 rounded-full p-1" />
                <div className="flex flex-col p-1 px-4">
                    <p className="">Sign Out</p>
                </div>
            </button>
          </form>
        )
    }


}