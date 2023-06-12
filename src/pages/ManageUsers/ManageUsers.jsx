

const ManageUsers = () => {
    return (
        <div>
            <h2>Manage Users</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                </td>
                                <td>
                                    <div className="flex flex-col">
                                        <button className="btn btn-sm mb-2">Admin</button>
                                        <button className="btn btn-sm mb-2">Instructor</button>
                                        <button className="btn btn-sm mb-2">Student</button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;