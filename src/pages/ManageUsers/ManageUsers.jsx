import { useEffect, useRef, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const location  = useLocation();
    const navigate = useNavigate();

    const [update,setUpdate] = useState(false);

    const updateRole = ({id, role})=>{
        fetch(`https://eliteyouga-server-side.vercel.app/update-user?id=${id}&role=${role}`).then(()=>{});
        setUpdate(!update);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Role Updated',
            showConfirmButton: false,
            timer: 1500
        });
    };
    useEffect(()=>{
        fetch('https://eliteyouga-server-side.vercel.app/user')
            .then(data=>data.json())
            .then(data=>{
                setUsers(data.users);
            });

    }, [update]);
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
                                                <img src={u.image} alt="Avatar Tailwind CSS Component" />
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
                                        <button onClick={()=>updateRole({id: u._id, role: "admin"})} className={`btn btn-sm mb-2 ${u.role=="admin"?"bg-red-500 disabled":""}`}>Admin</button>
                                        <button onClick={()=>updateRole({id: u._id, role: "instructors"})} className={`btn btn-sm mb-2 ${u.role=="instructors"?"bg-sky-300 disabled":""}`}>Instructor</button>
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