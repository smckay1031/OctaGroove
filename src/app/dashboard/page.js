import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";


export default async function Dashboard() {

    return(
        <main>
            <h1 className=" mt-32">Dashboard</h1>
        </main>
    );
}