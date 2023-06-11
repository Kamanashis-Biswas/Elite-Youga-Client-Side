import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [role, setRole] = useState(localStorage.getItem('role'));
    return (
        <div className="flex-1 h-full">
            <div className="flex sm:h-full flex-col sm:flex-row">
                <div className="flex-auto sm:w-64 sm:flex-none bg-teal-100 h-full">
                    {role === "admin" ? (
                        <div className="flex flex-row sm:flex-col list-none mt-10 ml-5 gap-4">
                            <NavLink to='manageclasses'><li>Manage Classes</li></NavLink>
                            <NavLink to='manageusers'><li>Manage Users</li></NavLink>


                        </div>
                    ) : ""}
                    {role === "instructors" ? (
                        <div className="flex flex-row sm:flex-col list-none mt-10 ml-5 gap-4">
                            <NavLink to='addclass'><li>Add Class</li></NavLink>
                            <NavLink to='myclasses'><li>My Classes</li></NavLink>                
                        </div>
                    ) : ""}

                    {role === "student" ? (
                        <div className="flex flex-row sm:flex-col">
                            <NavLink><li>Selected Class</li></NavLink>
                            <NavLink><li>Enrolled Class</li></NavLink>
                        </div>
                    ) : ""}

                </div>
                <div className="flex-1 bg-red-300">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;