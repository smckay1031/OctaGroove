
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"
import { TopTracksMed } from "../../components/dashboard/topTracks"


export  default  async function DashboardShort() {

        return (
            <div className="flex gap-2 justify-center">
            <TopTracksShort />
            <ArtistShort />
            </div>
        )
}