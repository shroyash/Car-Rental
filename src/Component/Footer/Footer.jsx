import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './footer.css';

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
      <footer className='footer bg-[#000d6b] py-4 pt-5'>
        <Container>
          <Row>
            <Col lg='4' sm='4' className='mb-sm-3 pb-5'>
              <div className="footer__logo mt-2">
                <Link to="/" className=" logo no-underline flex mb-1">
                  <i className="ri-car-fill text-white text-2xl"></i>
                  <h3 className="text-[1em] font-bold ml-1 text-white">
                    Rent Car<br /> <span>Service</span>
                  </h3>
                </Link>
                <div className="footer__content text-justify text-white text-[0.8em] leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sed quam molestiae voluptatibus nihil at eos? Totam harum sint reiciendis distinctio nisi ab eum deleniti quos, velit voluptatum itaque nihil.
                </div>
              </div>
            </Col>
            <Col lg='2' sm='2' className='mb-sm-3 pb-5'>
              <div className="footer__QuickLink">
                <div className="footer__heading text-white">
                  <h5>Quick Link</h5>
                </div>
                <div className="footer__list mt-2 text-xs">
                  {navLinks.map((item, index) => (
                    <li className='list-none leading-9' key={index}>
                      <NavLink className='no-underline text-light' to={item.path}>{item.display}</NavLink>
                    </li>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg='3' sm='3' className='mb-sm-3 pb-5'>
              <div className="footer__heading">
                <h5 className='text-light'>Head Office</h5>
              </div>
              <div className="content text-light leading-5 text-xs">
                <p className='mt-3'>123 Bansbari,Kathmandu</p>
                <p>Phone 9860027293</p>
                <p>Email : shroyash32@gmail.com</p>
                <p>Office Time: 10am - 5pm</p>
              </div>
            </Col>
            <Col lg='3' sm='3' className='mb-sm-3 pb-5'>
              <div className="footer__New">
                <div className="footer__mainHeading text-white">
                  <h5>NewsLetter</h5>
                  <p className='text-light leading-5 text-xs'>Lorem ipsum dolor sit amet consectetur<br /> shroyash is op</p>
                  <div className="form-srch d-flex justify-center">
                    <form action="">
                      <input type="text" name="" id="" placeholder='search' className='form-control rounded' />
                    </form>
                    <span>
                      <i className="ri-search-line mx-1 mt-3 text-white text-xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <hr className='w-100 h-4 text-white'></hr>
            <Col lg='12' sm='12' md='12' className='text-center text-light text-[0.9em]'>
              <p>@CopyRight, Developed by <span className='text-yellow-500'>Shroyash Shrestha</span>, All Right Deserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;

