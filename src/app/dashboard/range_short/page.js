
import { ArtistShort } from "../../components/dashboard/topArtists"
import {TopTracksShort} from "../../components/dashboard/topTracks"
import { signIn, auth } from "../../../auth"



export  default  async function DashboardShort() {
    const session = await auth()
    if(session.error === 'RefreshTokenError') {
        await signIn('spotify')
    }
        return (
            <div className="flex gap-2 justify-center px-2">
            <TopTracksShort />
            <ArtistShort />
            </div>
        )
}