
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"




export  default  async function DashboardShort() {
        return (
            <div className="grid md:grid-cols-2  gap-2 px-5">
            <TopTracksShort />
            <ArtistShort />
            </div>
        )
}