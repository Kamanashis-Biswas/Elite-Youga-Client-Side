import { useEffect, useState } from "react";


const Instructors = () => {
    const [inst, setInst] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors').then((data)=>data.json())
            .then(data=>{
                console.log(data);
                setInst(data || []);
            });
    }, []);
    return (
        <div>
            <div className="overflow-x-auto p-4 mb-10 border rounded-lg w-1/2 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inst.map(i=>(
                            <tr key={i._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{i.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {i.email}
                                </td>
                            </tr>
                        ))}

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;