import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Appointment from "./Pages/Appointment";
import Home from "./Pages/Home";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])
export default router;