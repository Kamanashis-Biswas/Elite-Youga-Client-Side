import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import Swal from "sweetalert2";


const ManageClass = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    const [update,setUpdate] = useState(false);

    const updateStatus = async({id, status})=>{
        const resp = await fetch(`https://eliteyouga-server-side.vercel.app/update-class?id=${id}&status=${status}`);
        const data = await resp.json();
        setUpdate(!update);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Class Status Updated',
            showConfirmButton: false,
            timer: 1500
        });
    }

    useEffect(() => {
        const resp = fetch(`https://eliteyouga-server-side.vercel.app/all-class`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.data);
                setData(data.data || []);
            })
    }, [update]);
    if(!data.length) return (<div>No classes found!</div>);
    return (
        
        <div className="overflow-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10 h-full">
                {data.map(d => (
                    <div key={d._id} className="card ml-3 w-70 bg-base-100 shadow-xl">
                        <figure><img src={d.class_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {d.class_name}
                                <div className="badge badge-secondary">{d.status}</div>
                            </h2>
                            <p>Available Seat: {d.seats}</p>
                            {user?.role === 'instructors' ?
                                (<div className="flex gap-10">
                                    <button className="btn btn-sm">Feedback</button>
                                    <button className="btn btn-sm">Update</button>
                                </div>):""
                            }
                            {user?.role === 'admin' ?
                                (<div className="flex gap-10">
                                    <button onClick={()=>updateStatus({id: d._id, status:"approved"})} className="btn btn-sm">Approve</button>
                                    <button onClick={()=>updateStatus({id: d._id, status:"denied"})} className="btn btn-sm">Deny</button>
                                </div>):""
                            }
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default ManageClass;