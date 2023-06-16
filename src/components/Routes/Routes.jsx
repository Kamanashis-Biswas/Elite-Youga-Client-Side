import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Instructors from "../../pages/Instructors/Instructors/Instructors";
import Classes from "../../pages/Classes/Classes/Classes";
import Dashboard from "../../Layout/Dashboard";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import ManageClass from "../../pages/ManageClasses/ManageClasses";
import ManageUsers from "../../pages/ManageUsers/ManageUsers";
import AddClass from "../../pages/AddClass/AddClass";
import MyClasses from "../../pages/MyClasses/MyClasses";
import ErrorPage from "../../pages/Error/Error";
import SelectedClass from "../../pages/SelectedClass/SelectedClass";
import EnrolledClass from "../../pages/EnrolledClass/EnrolledClass";
import CheckoutForm from "../../pages/Payment/CheckoutForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                   {
                    path:'manageclasses',
                    element: <ManageClass></ManageClass>
                   },
                   {
                    path:'manageusers',
                    element: <ManageUsers></ManageUsers>
                   },
                   {
                    path:'addclass',
                    element: <AddClass></AddClass>
                   },
                   {
                    path:'myclasses',
                    element: <MyClasses></MyClasses>
                   },
                   {
                    path:'selectedclass',
                    element: <SelectedClass></SelectedClass>
                   },
                   {
                    path:'enrolledclass',
                    element: <EnrolledClass></EnrolledClass>
                   },
                ]
            }
        ]
    },
    {
        path: '/payment',
        element: <CheckoutForm/>
    }
]);
