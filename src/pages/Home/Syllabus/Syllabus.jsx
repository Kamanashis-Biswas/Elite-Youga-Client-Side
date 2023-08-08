

const Syllabus = () => {
    return (
        <div>
            <div className="py-16">
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-semibold text-center mb-12">
                        Yoga Course Syllabus
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 1: Foundation</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                <li>Introduction to yoga principles</li>
                                <li>Basic asanas and alignment</li>
                                <li>Pranayama techniques</li>
                                <li>Mindfulness and relaxation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 2: Strength</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                <li>Building core strength</li>
                                <li>Dynamic flow sequences</li>
                                <li>Introduction to inversions</li>
                                <li>Exploring balance and stability</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 3: Flexibility</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                <li>Deepening stretches and poses</li>
                                <li>Yin yoga and relaxation</li>
                                <li>Opening hip and shoulder joints</li>
                                <li>Enhancing body awareness</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Week 4: Mind-Body Connection</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                <li>Meditation techniques</li>
                                <li>Chakra balancing practices</li>
                                <li>Integrating yoga philosophy</li>
                                <li>Progress tracking and reflection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Syllabus;