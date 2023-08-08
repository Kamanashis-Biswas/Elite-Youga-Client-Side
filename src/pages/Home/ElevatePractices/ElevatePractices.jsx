

const ElevatePractices = () => {
    return (
        <div>
            <div className="py-16">
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-semibold text-center mb-12">
                        Elevate Your Practice with Additional Extras
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <img src="https://i.ibb.co/C7rWVJm/yoga3.png" alt="Yoga Gear Shop" className="mb-6 rounded-lg h-48 w-full object-cover" />
                            <h3 className="text-xl font-semibold mb-4">Yoga Gear Shop</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Discover our curated collection of premium yoga mats, props, and attire. Elevate your practice with gear designed for comfort and style, enhancing your connection to the mat.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <img src="https://i.ibb.co/1bgZ0nd/yoga2.png" alt="Online Community" className="mb-6 rounded-lg h-48 w-full object-cover" />
                            <h3 className="text-xl font-semibold mb-4">Online Community</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Join our vibrant online community of dedicated yogis. Connect with fellow practitioners, share insights, and engage in discussions to enrich your practice and inspire your journey.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <img src="https://i.ibb.co/z776D2Z/yoga1.png" alt="Personalized Plans" className="mb-6 rounded-lg h-48 w-full object-cover" />
                            <h3 className="text-xl font-semibold mb-4">Personalized Plans</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Ready for a tailored approach? Our experienced instructors create personalized practice plans to match your goals and abilities. Elevate your progress with custom guidance and support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElevatePractices;