import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroData } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {heroData.title}
                <br />
                <span className="text-yellow-300">{heroData.subtitle}</span>
              </h1>
              <p className="text-xl text-white/90">{heroData.description}</p>
              <div className="flex gap-4">
                <Link
                  to="/menu"
                  className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Order Now
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/menu"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-500 transition-all"
                >
                  View Menu
                </Link>
              </div>
            </div>
            <div className="hidden md:block text-9xl text-center animate-bounce">
              {heroData.heroEmoji}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
