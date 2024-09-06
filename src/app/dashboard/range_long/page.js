import { ArtistLong } from "../../components/dashboard/topArtists";
import { TopTracksLong } from "../../components/dashboard/topTracks";

export default function DashboardMedium() {

    return(
        <section className="grid md:grid-cols-2  gap-2 px-2">
            <TopTracksLong />
            <ArtistLong />
        </section>
    )
}