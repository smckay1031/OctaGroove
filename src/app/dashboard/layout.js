import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"
import ExploreCard from "../components/dashboard/explore"
import { CurrentlyPlaying} from "../components/dashboard/nowPlaying"
import MobileNav from "../components/nav/mobileNav"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex mt-20 py-5 font-Inter max-w-full" id="dashboardLayout">
                <SideBar />
                <MobileNav />
                <div>
                    <section className="z-20"> {children}</section>
                    <div className="flex items-end gap-2 lg:pr-4 mt-5">
                    <ExploreCard />
                    <CurrentlyPlaying />
                    </div>
                </div>
            </div>
        )
    }
