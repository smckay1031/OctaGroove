import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"
import ExploreCard from "../components/dashboard/explore"
import { CurrentlyPlaying} from "../components/dashboard/nowPlaying"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex mt-2 py-5" id="dashboardLayout">
                <SideBar />
                <div>
                    <section className="max-w-full"> {children}</section>
                    <div className="flex">
                    <ExploreCard />
                    <CurrentlyPlaying />
                    </div>
                </div>
            </div>
        )
    }
