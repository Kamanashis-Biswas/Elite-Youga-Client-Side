import { useEffect, useRef, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const location  = useLocation();
    const navigate = useNavigate();

    const updateRole = ({id, role})=>{
        fetch(`http://localhost:5000/update-user?id=${id}&role=${role}`).then(()=>{});
    };
    useEffect(()=>{
        fetch('http://localhost:5000/user')
            .then(data=>data.json())
            .then(data=>{
                setUsers(data.users);
            });

    }, []);
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u=>(
                            <tr key={u._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={u.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{u.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {u.email}
                                </td>
                                <td>
                                    <div className="flex flex-col">
                                        <button onClick={()=>updateRole({id: u._id, role: "admin"})} className="btn btn-sm mb-2">Admin</button>
                                        <button onClick={()=>updateRole({id: u._id, role: "instructors"})} className="btn btn-sm mb-2">Instructor</button>
                                        <button onClick={()=>updateRole({id: u._id, role: "student"})} className="btn btn-sm mb-2">Student</button>
                                    </div>
                                </td>

                            </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;