import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage";
import About from '../Pages/About'
import Activity from "../Pages/Activity";
import Calender from "../Pages/Calender";
import Search from "../Pages/search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
    },
    {
        path: "/Dashboard",
        element: <DashboardPage />
    },
    {
        path: "/setting",
        element: <About />
    },
    {
        path : "/Activity",
        element:<Activity/>
    },
    {
        path: "/Calender",
        element: <Calender/>
    },
    {
        path:"/Search",
        element: <Search/>
    },
])

const Routing = () =>{
    return(
        <RouterProvider router={router} />
    )
}

export default Routing