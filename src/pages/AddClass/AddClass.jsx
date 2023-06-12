import { useContext } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";


const AddClass = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = async (event)=>{
      event.preventDefault();
      const data = {
        class_name: event.target.class_name.value,
        class_image: event.target.class_image.value,
        inst_name: event.target.inst_name.value,
        inst_email: event.target.inst_email.value,
        seats: +event.target.seats.value,
        price: +event.target.price.value,
      };
    
      const resp = await fetch('http://localhost:5000/add-class', 
        {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(data)}
      );
      const d = await resp.json();
      console.log(d);
        
    };
    return (
        <div>
          <div className="w-1/2 mx-auto my-10">
            <div className="card shadow-2xl bg-base-100">
              <h2 className="mt-10 text-center text-lg">This is ADD Class</h2>
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input name="class_name" type="text" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Image</span>
                  </label>
                  <input name="class_image" type="text" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input name="inst_name" type="text" disabled defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Email</span>
                  </label>
                  <input name="inst_email" type="text" disabled defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Seats</span>
                  </label>
                  <input type="number" name="seats" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="number" name="price" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Add Class" />
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};

export default AddClass;