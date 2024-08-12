
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
        </div>
    )
}
