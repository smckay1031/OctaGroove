
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"




export  default  async function DashboardShort() {
        return (
            <div className="flex gap-2 justify-center px-2">
            <TopTracksShort />
            <ArtistShort />
            </div>
        )
}