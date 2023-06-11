import { useContext } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";


const AddClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
           


    
    <div className="w-1/2 mx-auto my-10">
    <div className="card shadow-2xl bg-base-100">
    <h2 className="mt-10 text-center text-lg">This is ADD Class</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input type="text" placeholder="type here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="text" placeholder="type here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" disabled defaultValue={user.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input type="text" disabled defaultValue={user.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="text" placeholder="type here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="type here" className="input input-bordered" />
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