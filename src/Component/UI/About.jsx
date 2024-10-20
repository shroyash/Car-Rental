import React from 'react'
import { Container,Row ,Col} from 'reactstrap'
import Img from '../../assests/all-img/car-img/bmw-offer.png'

const About = () => {
  return (
    <div className="about-section mt-56 mb-22">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="about-section__heading -mb-2">
              <p className="text-yellow-500 ">About Us</p>
            </div>
            <div className="about-section__main-heading">
              <h3 className="text-primary font-bold">Welcome to the Car Rent Service</h3>
            </div>
            <div className="about-section__content text-xs leading-3">
             <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis amet aut necessitatibus vitae</p >
             <p>repudiandae, placeat eligendi asperiores illum ab saepe. Vero, qui aut quam voluptates quos</p>
              <p className='mb-4'> laudantium unde repellendus.</p> 
            </div>
            <div className="about-section__list-container text-xs mt-4">
              <Row>
                <Col lg="6" md="6" sm="6">
                  <div className="about-section__list d-flex">
                    <span className="mx-1 text-yellow-500 ]"><i className="ri-check-double-line"></i></span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <div className="about-section__list d-flex">
                    <span className="mx-1  text-yellow-500"><i className="ri-check-double-line"></i></span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <div className="about-section__list d-flex">
                    <span className="mx-1  text-yellow-500"><i className="ri-check-double-line"></i></span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <div className="about-section__list d-flex">
                    <span className="mx-1  text-yellow-500"><i className="ri-check-double-line"></i></span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="about-section__car-img">
              <img src={Img} className="img-fluid w-full" alt="BMW Offer" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
