import { ArtistMed } from "../../components/dashboard/topArtists";
import { TopTracksMed } from "../../components/dashboard/topTracks";

export default function DashboardMedium() {

    return(
        <section className="flex gap-4 justify-center pl-4">
            <TopTracksMed />
            <ArtistMed />
        </section>
    )
}