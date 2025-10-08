// components/PopularDishes.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Star, Plus, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { food_list } from "../assets/frontend_assets/assets";

const PopularDishes = () => {
  const splideRef = useRef(null);
  const popularItems = food_list.slice(0, 12);

  const handlePrevious = () => {
    if (splideRef.current) {
      splideRef.current.go("<");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go(">");
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Popular Dishes
          </h2>
          <p className="text-gray-600 text-lg">Our customers' favorite meals</p>
        </div>

        <div className="relative">
          {/* Custom Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Previous"
          >
            <ChevronLeft
              size={28}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Next"
          >
            <ChevronRight
              size={28}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              gap: "2rem",
              pagination: false,
              arrows: false,
              autoplay: false,
              speed: 1000,
              easing: "cubic-bezier(0.25, 1, 0.5, 1)",
              drag: true,
              breakpoints: {
                1280: { perPage: 3, gap: "1.5rem" },
                1024: { perPage: 3, gap: "1rem" },
                768: { perPage: 2, gap: "1rem" },
                640: { perPage: 1, gap: "1rem" },
              },
            }}
          >
            {popularItems.map((dish) => (
              <SplideSlide key={dish._id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full border border-orange-100">
                  <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {dish.isVeg && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                        <Leaf size={14} />
                        Veg
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {dish.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                        <Star
                          size={16}
                          className="fill-yellow-500 text-yellow-500"
                        />
                        <span className="text-sm font-semibold">
                          {dish.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {dish.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-500">
                        ${dish.price}
                      </span>
                      <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
