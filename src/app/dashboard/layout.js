import SideBar from "../components/dashboard/sidebar"

export default function DashboardLayout( {children}) {
    return (
        <div className="flex">
            <SideBar />
            <section> {children}</section>
        </div>
    )

}