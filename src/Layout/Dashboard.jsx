import {  useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [role, setRole] = useState(localStorage.getItem('role')); 
    return (
        <div className="flex-1 h-full">
            <div className="flex sm:h-full flex-col sm:flex-row">
                <div className="flex-auto sm:w-64 sm:flex-none bg-teal-100 h-full">
                    {role === "admin" ? (
                        <div className="flex flex-row sm:flex-col">
                            <li>Manage Classes</li>
                            <li>Manage Users</li>
                        </div>
                    ):""}
                    {role === "instructor" ? (
                        <div className="flex flex-row sm:flex-col">
                            <li>Add Class</li>
                            <li>My Classes</li>
                        </div>
                    ):""}

                    {role === "student" ? (
                        <div className="flex flex-row sm:flex-col">
                            <li>My S Class</li>
                            <li>Enrolled Class</li>
                            <li>Payment</li>
                        </div>
                    ):""}
                    
                </div>
                <div className="flex-1 bg-red-300">
                    {/* <Outlet/> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;