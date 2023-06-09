import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Routine = () => {
    return (
        <div>
             <SectionTitle heading={'Routine'}></SectionTitle>
            <div className="overflow-x-auto border p-4 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Sarurday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>8:00 AM</th>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>12:00 PM</th>
                            <td></td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3:00 PM</th>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>6:00 PM</th>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                            <td>Yoga For Climbers(8:00 AM - 10:00 AM)</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Routine;