import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Aboutus from "./Pages/Aboutus";
import Admin from "./Pages/Admin";
import AddDepertment from "./Pages/AdminDashboard/AddDepertment";
import AddDoctor from "./Pages/AdminDashboard/AddDoctor";
import AddImages from "./Pages/AdminDashboard/AddImages";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import IndoorServices from "./Pages/AdminDashboard/IndoorServices";
import OtherServices from "./Pages/AdminDashboard/OtherServics";
import OutdoorServices from "./Pages/AdminDashboard/OutdoorServices";
import Appointment from "./Pages/Appointment";
import DepertmentDetails from "./Pages/DepertmentDetails";
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
            {
                path:'/department/:id',
                element:<DepertmentDetails ></DepertmentDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/doctors-data/${params.id}`)
            },

        ]
    },
    {
        path:'/admin-dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children:[
            {
                path:'/admin-dashboard',
                element: <IndoorServices></IndoorServices>
            },
            {
                path:'/admin-dashboard/outdoor-services',
                element: <OutdoorServices></OutdoorServices>
            },
            {
                path:'/admin-dashboard/other-services',
                element: <OtherServices></OtherServices>
            },
            {
                path:'/admin-dashboard/add-depertment',
                element: <AddDepertment></AddDepertment>
            },
            {
                path:'/admin-dashboard/add-images',
                element: <AddImages></AddImages>
            },
            {
                path:'/admin-dashboard/add-doctor',
                element: <AddDoctor></AddDoctor>
            },
        ]
    }
])
export default router;