import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar"

function MainLayout() {


    return (
        <>
            <NavBar/>
            <Outlet/>

        </>
    )
}
export default MainLayout