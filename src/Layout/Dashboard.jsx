import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [role, setRole] = useState(localStorage.getItem('role'));
    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/5 bg-gray-300">
            {role === "admin" ? (
                        <div className="flex flex-row sm:flex-col list-none mt-10 ml-5 gap-4 p-10 md:p-0">
                            <NavLink to='manageclasses' ><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg">Manage Classes</li></NavLink>
                            <NavLink to='manageusers'><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg">Manage Users</li></NavLink>
                        </div>
                    ) : ""}
                    {role === "instructors" ? (
                        <div className="flex flex-row sm:flex-col list-none mt-10 ml-5 gap-4">
                            <NavLink to='addclass'><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg font-bold">Add Class</li></NavLink>
                            <NavLink to='myclasses'><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg font-bold">My Classes</li></NavLink>                
                        </div>
                    ) : ""}

                    {role === "student" ? (
                        <div className="flex flex-row sm:flex-col list-none mt-10 ml-5 gap-4 p-10 md:p-0">
                            <NavLink to="selectedclass"><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg">Selected Class</li></NavLink>
                            <NavLink to="enrolledclass"><li className="bg-sky-300 w-5/6 p-4 rounded-xl text-lg">Enrolled Class</li></NavLink>
                        </div>
                    ) : ""}
            </div>
            <div className="w-full md:w-4/5">
                <Outlet></Outlet>
            </div>
        </div>
       
    );
};

export default Dashboard;