import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Appointment from "./Pages/Appointment";
import Gallary from "./Pages/Gallary";
import Home from "./Pages/Home";
import Service from "./Pages/Service";

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
            },
            {
                path:'/gallery',
                element:<Gallary></Gallary>
            },
            {
                path:'/service',
                element:<Service></Service>
            }
        ]
    }
])
export default router;