import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"
import clock from "../../../public/images/🦆 icon _clock_.jpg"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex">
            <SideBar />
            <section className="max-w-full"> {children}</section>
            </div>
        )
    }
