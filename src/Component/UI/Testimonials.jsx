import React from "react";
import Slider from "react-slick";
import img1 from '../../assests/all-img/slide-img/ava-1.jpg'
import img2 from '../../assests/all-img/slide-img/ava-2.jpg'
import img3 from '../../assests/all-img/slide-img/ava-3.jpg'
import img4 from '../../assests/all-img/slide-img/ava-4.jpg'


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" testimonial container mx-auto mb-20">
      <div className="sub-heading text-center text-yellow-300 font-bold">
        <h6 className="font-bold" >Our Cilent Says</h6>
      </div>
      <div className="main-heading text-center text-primary font-bold mb-10">
        <h2  className="font-bold">Testimonial</h2>
      </div>
      <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description text-[0.9em] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img1} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description text-[0.9em] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">MIna Ho</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description text-[0.9em] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tina HoEv</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description text-[0.9em] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={img4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Silla nOuy</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
