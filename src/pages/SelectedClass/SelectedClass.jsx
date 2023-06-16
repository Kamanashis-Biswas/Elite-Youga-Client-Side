import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const SelectedClass = () => {
    const [cls, setCls] = useState([]);
    const [update,setUpdate] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/get-sclass?userId=${localStorage.getItem('userId')}`)
            .then(data=>data.json())
            .then(data=>{
                let arr = [];
                arr = arr.concat(...data.map(m=>m.classes));
                setCls(arr || []);
            })
    }, [update]);
    const deleteClass = async({classId})=>{
        fetch(`http://localhost:5000/delete-class?classId=${classId}&userId=${localStorage.getItem('userId')}`, {method: "DELETE"})
            .then(data=>data.json())
            .then(data=>{
                console.log(data);
                setUpdate(!update);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cls.map(c=>(
                <div key={c._id} className="card card-compact w-80 bg-base-100 shadow-xl ml-4">
                    <figure><img src={c.class_image} alt="Class Image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{c.class_name}</h2>
                        <p>{c.inst_name}</p>
                        <p>{c.seats}</p>
                        <p>{c.price}</p>
                        <div className="card-actions justify-between">
                            <button onClick={()=>deleteClass({classId: c._id})} className="btn btn-primary">Delete</button>
                            <button className="btn btn-primary">Pay</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectedClass;