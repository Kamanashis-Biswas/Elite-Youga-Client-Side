import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {useNavigate} from 'react-router-dom';

const PopularClasses = () => {
    const [pclass, setPclass] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(pclass.length) return;
        axios.get('https://eliteyouga-server-side.vercel.app/all-class').then(resp=>{
            let data = resp.data.data || [];
            data = data.sort((b, a)=> a.enrolled - b.enrolled);
            console.log(data);
            setPclass(data || []);
            console.log(pclass);
            
        });
    }, []);
    return (
        <div>
            <SectionTitle heading={"Popular Class"}></SectionTitle>
            <section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 p-4">
                    {pclass.map(p=>(
                        <div key={p._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={p.class_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{p.class_name}</h2>
                                <p>Instructor Name: {p.inst_name}</p>
                                <p>Instructor Email: {p.inst_email}</p>
                                <p>Available Seat: {p.seats}</p>
                                <p>Price: {p.price}</p>
                                
                                <div className="card-actions justify-end">
                                    <button onClick={()=>navigate(`/payment/${p._id}`)} className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>

            </section>
        </div>
    );
};

export default PopularClasses;