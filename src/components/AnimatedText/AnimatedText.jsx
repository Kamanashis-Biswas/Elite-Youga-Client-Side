import { JackInTheBox } from "react-awesome-reveal";

const AnimatedText = () => {
  return (
    <div>
      <section className="cpy-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Discover Yoga through Animated Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <JackInTheBox>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mindful Breathing</h3>
              <p className="text-gray-700 leading-relaxed">
                Immerse yourself in the art of pranayama, the practice of controlled breathing. Learn to synchronize your breath with movement and experience the calming effects it has on your mind and body.
              </p>
            </div>
          </JackInTheBox>
          
          <JackInTheBox>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Balance and Harmony</h3>
              <p className="text-gray-700 leading-relaxed">
                Explore the balance between strength and flexibility with asanas that challenge your stability. Cultivate harmony in body and mind as you move through sequences designed to align your energy centers.
              </p>
            </div>
          </JackInTheBox>
          
          <JackInTheBox>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inner Peace Meditation</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience the transformative power of meditation. Dive deep within yourself to discover the serenity that resides at your core. Develop mindfulness and cultivate a sense of inner peace and tranquility.
              </p>
            </div>
          </JackInTheBox>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AnimatedText;