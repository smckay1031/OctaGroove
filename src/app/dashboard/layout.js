import SideBar from "../components/dashboard/sidebar"

export default function DashboardLayout( {children}) {
    return (
        <div>
            <SideBar />
            <section> {children}</section>
        </div>
    )

}