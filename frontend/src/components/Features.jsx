import {
  features,
} from "../assets/frontend_assets/assets";
const Features = () => {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-gray-50 hover:bg-orange-50"
                >
                  <div className="text-orange-500 flex justify-center mb-4">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
