

const SelectedClass = () => {
    return (
        <div className="ml-5 mt-10">
            <div className="flex justify-around text-lg font-semibold">
                <div>
                    <h2>Total Selected Class: </h2>
                </div>
                <div>
                    <h2>Total Price: </h2>
                </div>
                <div>
                    <button className="btn btn-outline">Pay</button>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;