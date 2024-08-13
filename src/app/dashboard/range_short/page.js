
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"

export  default function DashboardShort() {

    return (
        <div className="grid grid-cols-2 gap-2 w-full">
            <TopTracksShort />
            <ArtistShort />
        </div>
    )
}