import SectionTitle from "../../components/SectionTitle/SectionTitle";


const ManageClass = () => {
    return (
        <div>
            <SectionTitle heading={"Manage Class"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ml-2 md:ml-5 justify-center">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!
                        <div className="badge badge-secondary">Status</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;