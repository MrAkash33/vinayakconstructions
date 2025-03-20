"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({slides,className}) => {

  const handleDownload = () => {
    const brochureUrl = "/brochure.pdf"; // Change this to your actual file path
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Vinayak_Construction_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        pagination={{ clickable: true }}
        // loop={true}
        navigation
        className="w-full className"
        style={{height:'720px'}}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover"
              />
              
              {/* Glassmorphism Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center w-2/3">
                  <h1 className="text-3xl font-bold">{slide.title}</h1>
                  <p className="m-6">
                  Vinayak Construction Company is a reputed firm specializing in residential, commercial,PEB, Warehouse and infrastructure development projects across India. With a strong presence in multiple regions, the company offers a range of services
                    {/* <span className="font-semibold"> short time</span>, and come back again.  
                    The <span className="font-semibold">trip</span> from York to Newcastle takes about an hour by train.  
                    We're going on a <span className="font-semibold">trip</span> to Norway this summer. */}
                  </p>
                  <button
                    onClick={handleDownload}
                    className="w-[200] bg-gradient-to-r from-customBrown to-customBrown hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl transition-all transform hover:scale-110 active:scale-95 border border-white/30"

                  >
                     Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
       <style jsx>{`
       
        `}</style>
      </Swiper>
  );
};

export default Carousel;
