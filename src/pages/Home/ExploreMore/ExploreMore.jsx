

const ExploreMore = () => {
    return (
        <div>
            <div className="py-16">
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-semibold text-center mb-12">
                        Explore More with Our Extras
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Guided Meditations</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Immerse yourself in a variety of guided meditations to relax and rejuvenate your mind and body. Our experienced instructors will lead you through calming sessions that help reduce stress and promote mindfulness.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Healthy Recipes</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Discover delicious and nutritious recipes that complement your yoga practice and nourish your body. From energizing smoothies to wholesome meals, our recipes are designed to support your overall well-being.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Yoga Workshops</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Join our special workshops conducted by experienced instructors to deepen your practice and knowledge. Whether you&apos;re a beginner or an advanced yogi, our workshops cover a wide range of topics to enhance your yoga journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExploreMore;