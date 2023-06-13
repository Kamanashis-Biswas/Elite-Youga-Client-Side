import { useEffect, useState } from "react";


const Classes = () => {

    const [cls, setCls] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/all-class').then(data=>data.json())
            .then(data=>{
                console.log(data.data);
                setCls(data.data);
            });
    }, []);
    return (
        <div className="grid grid-cols-3">
            {cls.map(c=>(
                <div key={c._id} className="card w-96 bg-base-100 shadow-xl mb-10">
                    <figure><img src={c.class_image} alt="Class Image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{c.class_name}</h2>
                        <p>Instructor Name: {c.inst_name}</p>
                        <p>Available Seat: {c.seats}</p>
                        <p>Price: {c.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Classes;