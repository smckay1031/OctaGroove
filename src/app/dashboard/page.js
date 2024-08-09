
import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../auth";
import { Suspense } from "react";
import {ArtistShort} from '../components/dashboard/topArtists'
import { ArtistMed } from "../components/dashboard/topArtists";
import { ArtistLong } from "../components/dashboard/topArtists";
import {NavBar} from "../components/nav/nav"

export default async function Dashboard() {

    
    return(
        <div className="">
            <NavBar className="" />
            <div className="flex mt-2">
                <aside className=" w-52">
                    <div className=" p-5  bg-[#ffffff10]">
                        <h2 className="font-bold text-lg">Results</h2>
                        <ul className=" font-normal text-sm list-disc">
                            <li>Last Month</li>
                            <li>Last 6 Monts</li>
                            <li>Last Year</li>
                        </ul>
                    </div>
                </aside>
                <div>
                    <Suspense fallback={<div> Loading...</div>}>
                        <ArtistShort />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
