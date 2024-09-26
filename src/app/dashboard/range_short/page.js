import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"

export default function DashboardShort() {

        return (
            <div className="grid md:grid-cols-2 gap-2 px-2 relative w-full">
                <TopTracksShort />
                <ArtistShort />
                <div id="absoluteBottom"> <a className="opacity-0"> a</a></div>
            </div>
        )
}