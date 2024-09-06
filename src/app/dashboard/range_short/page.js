
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"




export  default  async function DashboardShort() {
        return (
            <div className="grid md:grid-cols-2  gap-2 lg:px-5 px-2">
            <TopTracksShort />
            <ArtistShort />
            </div>
        )
}