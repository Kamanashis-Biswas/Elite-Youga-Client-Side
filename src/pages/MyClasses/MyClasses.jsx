import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (user) {
            const resp = fetch(`https://assignment-12-server-side-xi.vercel.app/my-class?email=${user.email}`)
                .then(resp => resp.json())
                .then(data => {
                    setData(data.data || []);
                })
        };
        return () => { user };
    }, [user]);
    return (
        
        <div >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 justify-center">
                {data.map(d => (
                    <div key={d._id} className="card ml-3 w-80 bg-base-100 shadow-xl">
                        <figure><img src={d.class_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {d.class_name}
                                <div className="badge badge-secondary">{d.status}</div>
                            </h2>
                            <p>Available Seat: {d.seats}</p>
                            <div className="flex gap-10">
                                <button className="btn btn-sm">Feedback</button>
                                <button className="btn btn-sm">Update</button>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default MyClasses;