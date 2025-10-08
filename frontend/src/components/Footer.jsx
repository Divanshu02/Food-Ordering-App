// components/Footer.jsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { contactInfo, appConfig } from "../assets/frontend_assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍽️</span>
              <span className="text-2xl font-bold text-white">
                {appConfig.appName}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering happiness and delicious food to your doorstep. Quality
              meals, fast delivery, every time.
            </p>
            <div className="flex gap-4">
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-orange-500 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/specials"
                  className="hover:text-orange-500 transition-colors"
                >
                  Specials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-orange-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-orange-500 transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-orange-500 transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-orange-500 flex-shrink-0 mt-1"
                />
                <span className="text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm font-semibold text-white mb-1">
                Opening Hours
              </p>
              <p className="text-sm">{contactInfo.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {appConfig.appName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/cookies"
                className="hover:text-orange-500 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
