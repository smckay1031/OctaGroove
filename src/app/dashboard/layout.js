import SideBar from "../components/dashboard/sidebar"
import auth from "../../auth"

export default function DashboardLayout( {children}) {

        return (
            <div className="flex">
            <SideBar />
            <section className=" px-2 max-w-full"> {children}</section>
            </div>
        )
    }
