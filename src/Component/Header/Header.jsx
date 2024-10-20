import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const menuRef = useRef(null);
  const [hide, setHide] = useState(true);

  const toggleMenu = () => {
    setHide(!hide);
    if (menuRef.current) {
      menuRef.current.classList.toggle('menu__active');
    }
  };

  const navLinks = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/car', display: 'Car Listing' },
    { path: '/blog', display: 'Blog' },
    { path: '/contact', display: 'Contact' },
  ];

  return (
    <div>
      <header className="header bg-[#000d6b] hidden sm:block ">
        <div className="header__top">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6" className="d-flex align-items-center">
                <div className="header__top__left">
                  <span className="text-white text-xs">Need Help?</span>
                  <span className="text-white text-xs ml-2">
                    <i className="ri-phone-fill"></i> 9818824609
                  </span>
                </div>
              </Col>

              <Col lg="6" md="6" sm="6" className="d-flex align-items-center justify-content-end">
                <div className="header__top__right">
                  <Link to="/login" className="text-white text-xs mr-2 no-underline">
                    <i className="ri-login-circle-line"></i>Login
                  </Link>
                  <Link to="/register" className="text-white text-xs no-underline">
                    <i className="ri-registered-line"></i>Register
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <header className="header2 bg-white my-4 hidden sm:block">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="3">
              <div className="header2__logo">
                <Link to="/" className="no-underline flex">
                  <i className="ri-car-fill text-[#000d6b] text-2xl"></i>
                  <h3 className="text-[1em] font-bold ml-1 text-[#000d6b]">
                    Rent Car<br /> <span>Service</span>
                  </h3>
                </Link>
              </div>
            </Col>

            <Col lg="3" md="3" sm="3">
              <div className="header2__location">
                <Link to="/" className="no-underline flex text-[0.9em]">
                  <i className="ri-earth-fill text-[#000d6b] text-2xl"></i>
                  <h3 className="text-[1em] ml-1 text-[#000d6b]">
                    Nepal<br /> <span>Kathmandu, Bansbari</span>
                  </h3>
                </Link>
              </div>
            </Col>

            <Col lg="3" md="3" sm="3">
              <div className="header2__time">
                <Link to="/" className="no-underline flex text-[0.9em]">
                  <i className="ri-car-fill text-[#000d6b] text-2xl"></i>
                  <h3 className="text-[1em] ml-1 text-[#000d6b]">
                    Sunday to Friday<br /> <span>10am - 4pm</span>
                  </h3>
                </Link>
              </div>
            </Col>

            <Col lg="3" md="3" sm="3">
              <div className="header2__call flex justify-end">
                <Link to="/request-call" className="bg-[#000d6b] text-[0.8em] text-white py-2 px-2 rounded no-underline">
                  <i className="ri-phone-fill mr-2" />Request a Call
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <header className='main-nav'>
        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>

              <div className="navigation" ref={menuRef}>
                <div className="menu text-white">
                  <span className="mobile__close me-auto" onClick={toggleMenu}>
                    <i className="ri-close-line"></i>
                  </span>
                  {navLinks.map((item, index) => (
                    <NavLink to={item.path} className="nav__item" key={index}>
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder="Search" />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
};

export default Header;
