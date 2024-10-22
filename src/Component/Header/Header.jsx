import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/car", display: "Car Listing" },
    { path: "/blog", display: "Blog" },
    { path: "/contact", display: "Contact" },
  ];

  return (
    <div>
      {/* Top Header */}
      <header className="hidden sm:block bg-blue-900">
        <div className="py-2">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xs flex items-center">
              <span>Need Help?</span>
              <span className="ml-2 flex items-center">
                <i className="ri-phone-fill mr-1"></i> 9818824609
              </span>
            </div>
            <div className="flex items-center">
              <Link to="/login" className="text-white text-xs mr-2 no-underline">
                <i className="ri-login-circle-line mr-1"></i>Login
              </Link>
              <Link to="/register" className="text-white text-xs no-underline">
                <i className="ri-registered-line mr-1"></i>Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Second Header */}
      <header className="hidden sm:block bg-white my-4">
        <div className="container mx-auto grid grid-cols-4 items-center gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-900 no-underline">
              <i className="ri-car-fill text-2xl"></i>
              <h3 className="ml-2 text-lg font-bold mt-2 leading-[0.75em]">
                Rent Car <br />
                <span className="text-sm">Service</span>
              </h3>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-900 no-underline">
              <i className="ri-earth-fill text-2xl"></i>
              <h3 className="ml-2 text-lg mt-2 leading-[0.75em]">
                Nepal <br />
                <span className="text-sm">Kathmandu, Bansbari</span>
              </h3>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-900 no-underline">
              <i className="ri-car-fill text-2xl"></i>
              <h3 className="ml-2 text-lg mt-2 leading-[0.75em]">
                Sunday to Friday <br />
                <span className="text-sm">10am - 4pm</span>
              </h3>
            </Link>
          </div>
          <div className="flex justify-end">
            <Link
              to="/request-call"
              className="bg-blue-900 text-sm text-white py-2 px-4 rounded no-underline"
            >
              <i className="ri-phone-fill mr-2"></i>Request a Call
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Navbar */}
      <nav className="hidden sm:block bg-blue-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`text-white text-[1em]  hover:text-blue-300 no-underline ${index != 0?"ml-5":""}`}
                activeClassName="font-bold"
              >
                {item.display}
              </NavLink>
            ))}
          </div>

          {/* Search box for desktop */}
          <div className="hidden sm:flex items-center bg-white rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search"
              className="text-sm outline-none w-full px-2"
            />
            <i className="ri-search-2-line"></i>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <header className="sm:hidden block">
        <div className="bg-blue-900 py-2">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-white no-underline"
              >
                <i className="ri-car-fill text-2xl"></i>
                <h3 className="ml-2 text-[1em] font-bold mt-3 leading-[0.75em] ">
                  Rent Car <br />
                  <span className="text-[0.9em]">Service</span>
                </h3>
              </Link>
            </div>

            <span
              className="cursor-pointer text-white text-2xl"
              onClick={toggleMenu}
            >
              <i className="ri-menu-line"></i>
            </span>

            {/* Mobile Menu Content */}
            <div
              className={`fixed top-0 right-0 w-2/4 h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            >
              <span
                className="cursor-pointer text-black text-3xl absolute top-4 right-4"
                onClick={toggleMenu}
              >
                <i className="ri-close-line"></i>
              </span>

              <div className="mt-28 text-center">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className="block text-lg text-blue-900 mb-6 ml-4 no-underline"
                    key={index}
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
