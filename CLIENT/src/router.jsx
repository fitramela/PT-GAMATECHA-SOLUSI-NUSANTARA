import {createBrowserRouter} from "react-router-dom"
import MainLayout from "./pages/mainLayout"
import LoginPage from "./pages/login"
import Dashboard from "./pages/dashboard"




const router = createBrowserRouter([
    {
        path : "/" ,
        element : <MainLayout />,
        children :[
            {
                path : "/",
                element : <Dashboard/>
            }
        ]
    },
  
    { 
        path: "/login",
        element : <LoginPage/>
    },
    // {
    //     path: "/Register",
    //     element: <Register/>
    // }
])

export default router