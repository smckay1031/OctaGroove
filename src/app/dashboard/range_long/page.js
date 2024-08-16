import { ArtistLong } from "../../components/dashboard/topArtists";
import { TopTracksLong } from "../../components/dashboard/topTracks";

export default function DashboardMedium() {

    return(
        <section className="flex gap-2">
            <TopTracksLong />
            <ArtistLong />
        </section>
    )
}