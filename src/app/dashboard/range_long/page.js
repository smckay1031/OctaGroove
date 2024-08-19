import { ArtistLong } from "../../components/dashboard/topArtists";
import { TopTracksLong } from "../../components/dashboard/topTracks";

export default function DashboardMedium() {

    return(
        <section className="flex gap-4 justify-center pl-4">
            <TopTracksLong />
            <ArtistLong />
        </section>
    )
}