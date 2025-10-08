import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of happy customers and enjoy delicious meals
            delivered to your door!
          </p>
          <Link
            to="/menu"
            className="inline-block bg-white text-orange-500 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Start Ordering Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default CTA;
