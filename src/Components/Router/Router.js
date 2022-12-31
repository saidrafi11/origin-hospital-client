import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Aboutus from "./Pages/Aboutus";
import Admin from "./Pages/Admin";
import Appointment from "./Pages/Appointment";
import Gallary from "./Pages/Gallary";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import Service from "./Pages/Service";
import Signup from "./Pages/Signup";

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
            },
            {
                path:'/aboutus',
                element:<Aboutus></Aboutus>
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/resetpassword',
                element:<ResetPassword></ResetPassword>
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            },

        ]
    }
])
export default router;