import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  const navLinks = [
    {
      path: '/about',
      display: 'About',
    },
    {
      path: '/car',
      display: 'Car Listing',
    },
    {
      path: '/blog',
      display: 'Blog',
    },
    {
      path: '/contact',
      display: 'Contact',
    },
  ];

  return (
    <div>
      <footer className='footer bg-[#000d6b] py-4 pt-2'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='mb-2'>
              <div className="footer__logo mt-4">
                <Link to="/" className="logo no-underline flex items-center mb-1">
                  <i className="ri-car-fill text-white text-2xl"></i>
                  <h3 className="text-[1em] font-bold ml-1 text-white">
                    Rent Car<br /> <span>Service</span>
                  </h3>
                </Link>
                <div className="footer__content text-justify text-white text-[0.8em] leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sed quam molestiae voluptatibus nihil at eos? Totam harum sint reiciendis distinctio nisi ab eum deleniti quos, velit voluptatum itaque nihil.
                </div>
              </div>
            </div>
            <div className='mb-2 mt-4'>
              <div className="footer__QuickLink">
                <h3 className="text-white">Quick Link</h3>
                <ul className="mt-2 text-xs p-0">
                  {navLinks.map((item, index) => (
                    <li className='list-none leading-9' key={index}>
                      <NavLink className='no-underline text-light' to={item.path}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='mb-2 mt-4'>
              <h3 className='text-light'>Head Office</h3>
              <div className="text-light leading-2 text-xs mt-3">
                <p>123 Bansbari, Kathmandu</p>
                <p>Phone: 9860027293</p>
                <p>Email: shroyash32@gmail.com</p>
                <p>Office Time: 10am - 2pm</p>
              </div>
            </div>
            <div className='mb-2 mt-4'>
              <h3 className='text-white'>Newsletter</h3>
              <p className='text-light leading-2 text-xs'>Lorem ipsum dolor sit amet consectetur<br /> shroyash is op</p>
              <div className="form-srch flex justify-center items-center mt-3">
                <form>
                  <input type="text" placeholder='search' className='form-control rounded w-full px-2 py-1' />
                </form>
                <span>
                  <i className="ri-search-line mx-1 text-white text-xl"></i>
                </span>
              </div>
            </div>
          </div>
          <div className='w-full '>
            <hr className='text-white' />
            <div className='text-center text-light text-[0.9em] mt-9'>
              <p>@CopyRight, Developed by <span className='text-yellow-200'>Shroyash Shrestha</span>, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
