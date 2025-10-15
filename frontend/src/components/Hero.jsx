// components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Delicious Pizza",
      subtitle: "Fresh from the Oven",
      description: "Order your favorite Italian pizzas with premium toppings",
      image: "🍕",
      bg: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "Tasty Burgers",
      subtitle: "Juicy & Flavorful",
      description: "Premium beef burgers with fresh ingredients",
      image: "🍔",
      bg: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "Fresh Salads",
      subtitle: "Healthy & Delicious",
      description: "Nutritious salads made with organic vegetables",
      image: "🥗",
      bg: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="relative">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          speed: 1000,
          arrows: true,
          pagination: true,
          pauseOnHover: false,
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className={`bg-gradient-to-r ${slide.bg} text-white py-20 px-4 min-h-[500px] flex items-center`}
            >
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                      <br />
                      <span className="text-yellow-300">{slide.subtitle}</span>
                    </h1>
                    <p className="text-xl text-white/90">{slide.description}</p>
                    <div className="flex gap-4">
                      <Link
                        to="/menu"
                        className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                      >
                        Order Now
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                  <div className="text-9xl text-center animate-bounce">
                    {slide.image}
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Hero;
