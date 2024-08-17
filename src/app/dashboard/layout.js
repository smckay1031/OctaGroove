import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"
import ExploreCard from "../components/dashboard/explore"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex flex mt-2">
            <SideBar />
            <div>
                <section className="max-w-full"> {children}</section>
                <ExploreCard />
            </div>
            </div>
        )
    }
