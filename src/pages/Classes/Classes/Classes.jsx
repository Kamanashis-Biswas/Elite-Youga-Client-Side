import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Classes = () => {

    const [cls, setCls] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-side-xi.vercel.app/all-class').then(data => data.json())
            .then(data => {
                console.log(data.data);
                setCls(data.data);
            });
    }, []);

    const addClass = async ({ classId }) => {
        const resp = await fetch('https://assignment-12-server-side-xi.vercel.app/set-class', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: localStorage.getItem('userId'), classId: classId }) });
        const data = await resp.json();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <>
            <Helmet>
                <title>EliteYoga | Classes</title>
            </Helmet>
            <div className="grid grid-cols-3">
                {cls.map(c => (
                    <div key={c._id} className="card w-96 bg-base-100 shadow-xl mb-10">
                        <figure><img src={c.class_image} alt="Class Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{c.class_name}</h2>
                            <p>Instructor Name: {c.inst_name}</p>
                            <p>Available Seat: {c.seats}</p>
                            <p>Price: {c.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => { addClass({ classId: c._id }) }} className="btn btn-primary">Add Class</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Classes;