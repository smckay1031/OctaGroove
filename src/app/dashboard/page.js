import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";



export default async function Dashboard() {

    const session = await auth();
    const token = session.user.access_token
    

    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=8&offset=0', {
        headers: {
            Authorization: 'Bearer' + token
        },
        method: "GET"
    });

    const artists = await response.json()
    console.log(token);
    console.log(artists);

   



    return(
        <main>
        <h1 className=" mt-32">Dashboard</h1>
        <p> </p>
    </main>
    )
}
