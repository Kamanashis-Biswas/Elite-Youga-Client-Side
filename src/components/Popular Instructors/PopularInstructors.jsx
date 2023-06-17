import SectionTitle from "../SectionTitle/SectionTitle";


const PopularInstructors = () => {
    return (
        <div>
            <SectionTitle heading={'Popular Instructors'}></SectionTitle>
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
                        
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Name:</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Email
                                </td>
                            </tr>
                        

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PopularInstructors;