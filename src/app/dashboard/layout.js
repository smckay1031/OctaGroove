import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"
import ExploreCard from "../components/dashboard/explore"
import { CurrentlyPlaying} from "../components/dashboard/nowPlaying"
import MobileNav from "../components/nav/mobileNav"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex mt-20 py-5 font-Inter overflow-hidden relative max-w-full" id="dashboardLayout">
                <SideBar />
                <MobileNav />
                <div>
                    <section className="z-20"> {children}</section>
                    <div className="flex items-end gap-2 lg:pr-4">
                    <ExploreCard />
                    <CurrentlyPlaying />
                    <div id="absoluteBottom"> <a className="opacity-0"> a</a></div>
                    </div>
                </div>
            </div>
        )
    }
