import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex mt-2">
            <SideBar />
            <section className="max-w-full"> {children}</section>
            </div>
        )
    }
