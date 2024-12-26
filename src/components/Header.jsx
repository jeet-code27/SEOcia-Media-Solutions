import React, { useState } from "react";
import { Menu, X, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const activePath = location.pathname;

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about-us" },
    {
      title: "Services",
      submenu: [
        { title: "Web Development", href: "/web-development" },
        { title: "SEO Optimization", href: "/seo" },
        { title: "Google Ads", href: "/google-ads" },
        { title: "Content Writing", href: "/content" },
        { title: "Social Media Marketing", href: "/social-media-marketing" },
      ],
    },
    { title: "Careers", href: "/career" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const ContactInfo = ({ className = "" }) => (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-indigo-600 shrink-0" />
          <span className="text-xs text-gray-500 whitespace-nowrap">For Consultation:</span>
          <div className="flex items-center gap-2">
            <a 
              href="tel:+91 9461677122" 
              className="text-sm text-gray-800 hover:text-indigo-600 whitespace-nowrap transition-colors"
            >
              +91 9461677122
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="tel:+91 8949342270" 
              className="text-sm text-gray-800 hover:text-indigo-600 whitespace-nowrap transition-colors"
            >
              +91 8949342270
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const QuickContactButtons = () => (
    <div className="flex items-center gap-2">
      <a
        href="tel:+91 9461677122"
        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 
                 rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300"
        aria-label="Call us for consultation"
      >
        <Phone size={16} className="text-white" />
      </a>
      <a
        href="https://wa.me/1234567890"
        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 
                 rounded-full hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare size={16} className="text-white" />
      </a>
    </div>
  );

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="images/company-logo.jpeg"
              alt="Company Logo"
              className="h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.href}
                  className={`relative text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-600 ${
                    activePath === item.href ? "text-indigo-600" : ""
                  }`}
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="inline-block ml-1 w-4 h-4 transform transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md shadow-xl rounded-lg 
                               opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 
                               group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className={`block px-4 py-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50/80 transition-colors duration-200 ${
                          activePath === subItem.href ? "text-indigo-600 bg-gray-50/80" : ""
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ContactInfo className="hidden lg:flex" />
            <QuickContactButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <QuickContactButtons />
            <button
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white/90 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-2 px-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                {!item.submenu ? (
                  <Link
                    to={item.href}
                    className={`block py-2 text-gray-700 font-medium hover:text-indigo-600 ${
                      activePath === item.href ? "text-indigo-600" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      className={`flex justify-between items-center w-full text-gray-700 py-2 font-medium hover:text-indigo-600 ${
                        activeSubmenu === item.title ? "text-indigo-600" : ""
                      }`}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          activeSubmenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeSubmenu === item.title ? "max-h-screen py-2" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className={`block py-2 text-gray-600 hover:text-indigo-600 ${
                            activePath === subItem.href ? "text-indigo-600" : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;