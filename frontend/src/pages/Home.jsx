// pages/Home.jsx
import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularDishes from "../components/PopularDishes";
import Testimonals from "../components/Testimonals";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Popular Dishes Section */}
      <PopularDishes />
      {/* Testimonials Section */}
      <Testimonals />

      {/* CTA Section */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
