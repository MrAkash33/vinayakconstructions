"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  { id: 1, title: "Interior Design", image: "/essentials/01.jpg" },
  { id: 2, title: "Building Architecture", image: "/essentials/real1.png" },
  { id: 3, title: "Flooring Installation", image: "/essentials/real2.png" },
  { id: 4, title: "House Renovation", image: "/essentials/excavator-action.jpg" },
];

const SwiperCards = () => {
  return (
    <div className="swiperClass">
        {cards.map((card) => (
            <CardItem key={card} title={card.title} image={card.image} />
        ))}
          <style jsx>{`
          .swiperClass{
              display: flex;
            gap: 40px;
            padding: 40px;
          }
            .cardItem {
                display: flex;
                align-items: center;
                position: absolute;
                bottom: 10px;
                right: 20px;
                border: 1px solid #ccc;
                border-radius: 29px;
                padding: 10px;
                margin: auto;
            }
          `}</style>
    </div>
  );
};

const CardItem = ({ title, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hover ? "opacity-900 bg-cover bg-center" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-60 text-black p-4 transition-opacity duration-300">
        <h3 className="text-5xl font-thin">{title}</h3>
        {/* <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-800 transition rounded"> */}
          <div style={{display:"flex"}} className="cardItemBorder">
            <span style={{fontSize:"12px"}}>Read More</span>
            <FaArrowRight size={8} className="mt-2" />
          </div>
        {/* </button> */}
      </div>
      <style jsx>{`
            .cardItem {
                display: flex;
                /* align-items: center; */
                position: absolute;
                bottom: 10px;
                right: 20px;
                border: 1px solid #ccc;
                border-radius: 29px;
                padding: 10px;
                margin: auto;
            }
          `}</style>
    </div>
  );
};

export default SwiperCards;
