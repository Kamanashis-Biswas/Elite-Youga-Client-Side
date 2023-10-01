import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularInstructors = () => {
  const [inst, setInst] = useState([]);
  useEffect(() => {
    fetch("https://eliteyouga-server-side.vercel.app/instructors")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setInst(data || []);
      });
  }, []);

  return (
    <div className="p-2 md:p-0">
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>
      <div className="overflow-x-auto p-4 mb-10 border rounded-lg w-full md:w-1/2 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {inst.map((i) => (
              <tr key={i._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={i.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{i.name}</div>
                    </div>
                  </div>
                </td>
                <td>{i.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularInstructors;
