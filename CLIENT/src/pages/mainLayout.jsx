import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar"

function MainLayout() {


    return (
        <>
            <NavBar/>
            <Outlet/>
            <h1 className="text-3xl text-red font-bold underline">
      Hello world!
    </h1>

        </>
    )
}
export default MainLayout