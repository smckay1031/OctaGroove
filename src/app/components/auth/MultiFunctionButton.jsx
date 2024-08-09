
import {auth, signIn, signOut} from "../../../auth";
import AccountIcon from "../../../../public/images/account_circle.svg";
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
            <button type="submit" className="inline-flex items-center justify-between rounded-full text-sm font-medium px-2 py-1">
              <Image
                src={AccountIcon} 
                alt="account"
                width={28}
                height={28}

                className="mr-2"
              />
              <p className="p-1">Sign In</p>
              </button>
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
            <button type="submit" className="inline-flex items-center justify-between rounded-full text-xs font-medium py-1 px-2">
                <img src={session.user.image} className="rounded-full h-8 w-8 mr-2" />
                <div className="flex flex-col p-1">
                    <p className="flex-row flex ">Sign Out</p>
                </div>
            </button>
          </form>
        )
    }


}