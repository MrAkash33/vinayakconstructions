"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = ({userSays,className}) => {
    
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20} // Space between slides
    slidesPerView={2} // 2 items per slide
    navigation // Navigation arrows
    pagination={{ clickable: true }} // Pagination dots
    autoplay={{ delay: 1000 }}
    breakpoints={{
      640: { slidesPerView: 1 }, // 1 item per slide on smaller screens
      1024: { slidesPerView: 3 }, // 2 items per slide on larger screens
    }}
    loop={true} // Enables infinite scrolling
    // className={className}
    >
      {userSays?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="Client">
                <img src={slide.image} alt="Elliptical Image" />
                <h1>{slide.name}</h1>
                <h2>{slide.text}</h2>
                <p>{slide.address}</p>
          </div>
        </SwiperSlide>
      ))}
       <style jsx>{`
        .Client {
              background: #90725942;
              padding: 10px;
              border-radius: 12px;
              height: 450px;
              background-image: url('https://img.freepik.com/free-vector/premium-creative-quote-box-template-with-text-space-vector_1017-39923.jpg');
              background-size: cover;  /* Adjusts image size */
              background-position: center;  /* Centers the image */
              background-repeat: no-repeat;  /* Prevents repeating */
          }
          .Client img{
          border-radius:20px;
          }
          .Client h1 {
          color:#fff;
          font-weight:800;
          text-align:center;
          margin:10px 0px;
          }
          .Client h2 {
          color:#fff;
          background: #1a2832;
          padding: 2px;
          }
          .Client p{
          color:#fff;
          font-weight:600;
          margin:20px 0px;
          text-align:right;
          }
      `}</style>
    </Swiper>
  );
};

export default TestimonialCarousel;
