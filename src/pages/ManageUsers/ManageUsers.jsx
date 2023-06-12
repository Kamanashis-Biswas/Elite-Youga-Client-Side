

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
                                    <select className="select w-full max-w-xs">
                                        <option disabled selected>Select User Role</option>
                                        <option>Admin</option>
                                        <option>Instructor</option>
                                    </select>
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