// import React from 'react';
// import Slider from 'react-slick';

// const TestimonialCarousel = () => {
//   const settings = {
//     dots: true,            // Shows navigation dots at the bottom
//     infinite: true,        // Infinite loop of slides
//     speed: 500,            // Transition speed
//     slidesToShow: 1,       // Number of slides to show at a time
//     slidesToScroll: 1,     // Number of slides to scroll at once
//     autoplay: true,        // Auto-play the carousel
//     autoplaySpeed: 3000,   // Delay between slides
//   };

//   return (
//     <div className="testimonial-carousel">
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card">
//             <div className="testimonial-image">
//               <img src={testimonial.image} alt={testimonial.name} />
//             </div>
//             <div className="testimonial-content">
//               <p className="testimonial-text">"{testimonial.text}"</p>
//               <p className="testimonial-name">— {testimonial.name}</p>
//               <p className="testimonial-rating">{testimonial.rating}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TestimonialCarousel;
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = ({userSays,className}) => {
    console.log('userSays',userSays)
    
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
      1024: { slidesPerView: 1.5 }, // 2 items per slide on larger screens
    }}
    loop={true} // Enables infinite scrolling
    className={className}
    >
      {userSays?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ textAlign: "center",display:"flex" }}>
            <div className="ellipse-container">
                <img src={slide.image} alt="Elliptical Image" className="ellipse-image"/>
            </div>
            <div style={{margin:"auto",borderLeft:"4px solid #bbe2ef",textAlign:"left",paddingLeft:"10px"}}>
                <h1>{slide.name}</h1>
                <h2>{slide.text}</h2>
                <p>{slide.address}</p>
            </div>
          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
