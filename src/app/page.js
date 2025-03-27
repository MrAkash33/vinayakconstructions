"use client";
// import Carousel from "../components/Carousel";
import styles from "../styles/Header.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import TestimonialCarousel from "../components/Testionomial";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import SwiperCards from "@/components/SwiperCards";
import Gallery from "@/components/Gallery";
import AnimatedCircles from "@/components/Circle";
import { FaArrowRight } from "react-icons/fa";
import dynamic from "next/dynamic";
import Link from "next/link";

const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });
const TestimonialCarousel = dynamic(() => import("../components/Testionomial"), { ssr: false });
// const SwiperCards = dynamic(() => import("../components/SwiperCards"), { ssr: false });


export default function Home({ Component, pageProps }) {
  const [videoError, setVideoError] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Show carousel after delay
    }, 2000); // Adjust delay based on how long it takes to load

    return () => clearTimeout(timer);
  }, []);
  const slides = [
    { id: 1, title: "Building the Future with Strength, Innovation", image: "essentials/graphics/1.png" },
    { id: 2, title: "Your Trusted Partner in Quality Construction", image: "essentials/graphics/2.png", },
    { id: 3, title: "Strong Foundations, Modern Designs, Lasting Structures", image: "essentials/graphics/7.png", },
    { id: 4, title: "Turning Dreams into Reality with Expertise", image: "essentials/graphics/4.png", },
    { id: 5, title: "Constructing the Future with Innovation and Integrity", image: "essentials/graphics/5.png", },
  ];

  const rectangles = [
    { id: 1, title: "Detail Quantity Estimates", image: "/essentials/01.jpg" },
    { id: 2, title: "Building Architecture", image: "/essentials/real1.png" },
    { id: 3, title: "Sub Contractors", image: "/essentials/real2.png" },
    { id: 4, title: "EPC Contractors / General Contractors", image: "/essentials/excavator-action.jpg" },
  ];

  const userSays = [
    {
      id: 1,
      name: "— Raj P., Restaurant Owner",
      text: `"We hired Vinayak Construction for our home renovation, and the results exceeded our expectations. Their attention to detail and commitment to quality made the entire process seamless. Highly recommended!"`,
      rating: "⭐⭐⭐⭐⭐",
      address: "Gwalior, India",
      image: "https://media.istockphoto.com/id/642738474/photo/beautiful-day-on-mountain.jpg?s=170667a&w=0&k=20&c=6pQe1Oe6QxG06HZiKI2GFRp7_TzP7OMsZch-Ll84DlM="
    },
    {
      id: 2,
      name: "Karen T., CEO of Abslses Digital",
      text: "From start to finish, the team was professional, timely, and communicative. Our new office space turned out exactly as planned, and the craftsmanship is outstanding!",
      rating: "⭐⭐⭐⭐⭐",
      address: "Bihar, India",
      image: "https://www.shutterstock.com/image-photo/young-boy-sit-front-tent-600nw-2476035215.jpg"
    },
    {
      id: 3,
      name: "Md Imam, Business Owner",
      text: "We always dreamed of a modern, custom-designed home, and Vinayak Construction made it happen. They worked closely with us, ensuring every detail matched our vision. Amazing experience!",
      rating: "⭐⭐⭐⭐⭐",
      address: "Gujarat, India",
      image: "https://media.istockphoto.com/id/1418805995/photo/happy-hiker-taking-selfie-on-the-top-of-the-mountain-young-man-having-fun-on-weekend-activity.jpg?s=612x612&w=0&k=20&c=CkRqugFmMcg_QszQsdVNaCAj-Kpxt5V1v393qZxIfb0="
    },
    {
      id: 4,
      name: "Akash Kr, Engineer",
      text: "Finding a reliable construction team is tough, but Vinayak Construction delivered beyond expectations. They completed our commercial project on time and within budget while maintaining top-notch quality!",
      rating: "⭐⭐⭐⭐⭐",
      address: "Bihar, India",
      image: "https://www.shutterstock.com/image-photo/young-boy-sit-front-tent-600nw-2476035215.jpg"
    },
    {
      id: 5,
      name: "Mr Patsy, Business Owner",
      text: "We entrusted them with our restaurant’s complete renovation, and the results were outstanding. Their expertise in design and construction made a huge difference!",
      rating: "⭐⭐⭐⭐⭐",
      address: "Noida, India",
      image: "https://media.istockphoto.com/id/1418805995/photo/happy-hiker-taking-selfie-on-the-top-of-the-mountain-young-man-having-fun-on-weekend-activity.jpg?s=612x612&w=0&k=20&c=CkRqugFmMcg_QszQsdVNaCAj-Kpxt5V1v393qZxIfb0="
    },
    {
      id: 6,
      name: "Shalini Prasad, House Owner",
      text: "Booking my family vacation to Paris was such a breeze. The itinerary was perfect for all ages, and we had a mix of culture, food, and fun activities.",
      rating: "⭐⭐⭐⭐⭐",
      address: "Patna, India",
      image: "https://www.shutterstock.com/image-photo/young-boy-sit-front-tent-600nw-2476035215.jpg"
    },
  ]


  const faqs = [
    { question: "How long does a construction project take?", answer: "Project duration depends on the size and complexity. We provide detailed timelines before starting." },
    { question: "Do you offer free consultations?", answer: "Yes! We provide free consultations to discuss your project requirements." },
    { question: "What areas do you serve?", answer: "We offer construction services in multiple regions. Contact us to check availability." },
  ];

  return (
    <>
      <div className="heroBanner">
      <div className="relative w-full h-[720px]">
        {/* Default Image (Will Fade Out) */}
        <img
          src="/essentials/graphics/2.1.png"
          alt="Loading..."
          className={`absolute inset-0 w-full h-[720px] object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Carousel (Appears Instantly) */}
        <div className={`absolute inset-0 w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <Carousel slides={slides} className="homeClass" />
        </div>
      </div>


      </div>
      <div className="strip">
        <div className="flex h-[250]">
          <div className="w-1/3 bg-black text-white flex items-center justify-center text-2xl font-bold">
            Work Order Partners <br></br> You Can Rely On.
          </div>

          <div className="w-2/3 p-8 bg-[black] flex items-center overflow-x-auto">
            <div className="flex space-x-6">
              {[{ "name": "Charbhuja Marble Stonex", "Add": "Kishangarh" }, { "name": "Fabflex India Factory", "Add": "Kota" }, { "name": "Raghav Agro ind.", "Add": "Kota" }, { "name": "Rajmal mahender Kumar Jain", "Add": "Kota" }, { "name": "Sun Agro Corporation", "Add": "Kota" }, { "name": "Uwon Packaging Factory", "Add": "Kota" }, { "name": "Vinayak Promoters Building", "Add": "Kota" }].map((item, index) => (
                <div key={index} className="min-w-[280px] p-4 bg-[#1a1a1a] shadow-md rounded-lg text-lg text-white">
                  {item.name}<br></br>
                  <p className="flex" style={{ alignItems: "center", gap: 10 }}><FaLocationDot />{item.Add}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <section className="flex flex-col md:flex-row h-screen">
          <div
            className="w-full md:w-1/2 h-full bg-cover bg-center relative"
            style={{
              backgroundImage: videoError ? "url('/photos/gallery1.jpg')" : "none",
            }}
          >
            {/* {!videoError && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={() => setVideoError(true)}
              >
                <source src="/photos/video1.mp4" type="video/mp4" />
              </video>
            )} */}
            <img src="/essentials/about.jpg" style={{width:"100%",height:'100vh'}}/>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About Vinayak Construction</h2>
              <p className="text-gray-600">
              Vinayak Construction Company is a reputed firm specializing in residential, commercial,PEB, Warehouse and infrastructure development projects across India. With a strong presence in multiple regions, the company offers a range of services, including:
              </p>
              <br></br>
              <p className="text-gray-600">
              •	Construction & Project Management – End-to-end solutions for residential, commercial, and industrial projects.<br></br>
              •	Renovation & Interior Design – Enhancing existing structures with modern aesthetics.<br></br>
              •	Infrastructure Development – Roads, bridges, and public works projects.<br></br>
              </p>
              <br></br>
              <p className="text-gray-600">
              Vinayak Construction primarily serves homeowners, real estate developers, businesses, and government agencies looking for high-quality construction and infrastructure solutions.
              </p>
              <Link href="/contact">
              <button
                className="w-[200] m-[8] bg-gradient-to-r from-customBrown to-customBrown hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl transition-all transform hover:scale-110 active:scale-95 border border-white/30 mt-4"
              >
                  Discover more
              </button>
                </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="marquueee">
        <div className="relative w-full overflow-hidden bg-white-900 py-4 my-20">
          <motion.div
            className="flex whitespace-nowrap text-6xl font-bold text-black"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="mx-8">🚀 Vinayak Constructions</span>
            <span className="mx-8">🏗️ Excellence in Infrastructure</span>
            <span className="mx-8">🏢 Building the Future</span>
          </motion.div>
        </div>
      </div>
      <div className="quality service">
            <h1 className="text-4xl text-center" style={{paddingLeft:"40px",fontWeight:700}}>Provide Quality Services</h1>
            <div className="flex gap-6 p-8 justify-center">
              {rectangles.map((rect) => (
                <div
                  key={rect.id}
                  className="relative w-80 h-80 bg-white rounded-lg overflow-hidden transition duration-300"
                  onMouseEnter={() => setHovered(rect.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      hovered === rect.id ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url(${rect.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                  </div>
                 <h1 className="text-5xl font-thin mt-20 ml-4">{rect.title}</h1>
                 <Link href='/services'>
                  <div style={{display:"flex"}} className="cardItemBorder">
                      <span style={{fontSize:"12px"}}>Read More</span>
                      <FaArrowRight size={8} className="mt-2" />
                    </div>
                 </Link>
                </div>
              ))}
            </div>
            {/* <SwiperCards/> */}
      </div>
      <div className='bg-[black]'>
        <h1 className="text-4xl text-center" style={{paddingLeft:"40px",fontWeight:700,padding:"40px 50px",color:"white"}}>Our Works</h1>
        <div className="destination">
          <div className="destination_box">
            <Gallery/>
          </div>
        </div>
      </div>
      <div className="projectCount">
          <AnimatedCircles/>
      </div>
      {/* <div className="parallex_card">
        <div className='container'>
        <h1 className="text-4xl text-center" style={{fontWeight:700,padding:"40px 50px",color:"black",fontSize:"2rem"}}>Best Local Construction Company Award</h1>
          <p>Experience the joy of travel as like-minded wanderers unite at these popular destinations.</p>
          <div className="card-container">
            <div className="interactive-card">
              <div className="card-image-wrapper">
                <img
                  src="https://t3.ftcdn.net/jpg/03/34/77/78/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg"
                  alt="Current"
                  className="current-image"
                />
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/029/090/039/small/generative-ai-maldives-travel-destination-water-hotel-resort-bungalows-a-place-for-dreams-photo.jpg"
                  alt="Hovered"
                  className="hovered-image"
                />
              </div>
              <div className="card-content">
                <h3>Maldives</h3>
                <p>It's not possible to ever forget the life moments where, in the morning ocean breeze, you can walk along the beach and pick colorful shells and corals"</p>
              </div>
            </div>
            <div className="interactive-card">
              <div className="card-image-wrapper">
                <img
                  src="https://static.toiimg.com/photo/msid-91918900,width-96,height-65.cms"
                  alt="Current"
                  className="current-image"
                />
                <img
                  src="https://t4.ftcdn.net/jpg/06/90/19/09/360_F_690190949_Zm2I8RwH3gc0qbVcqiBCpQBbhPY0OpYd.jpg"
                  alt="Hovered"
                  className="hovered-image"
                />
              </div>
              <div className="card-content">
                <h3>jammu and kashmir</h3>
                <p>Jammu and Kashmir is known as the "Heaven on Earth". It's known for its natural beauty.</p>
              </div>
            </div>
          </div>
          <div className="card-container">
          </div>
        </div>
      </div> */}
      <section className="py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      <div className="testinomonial" style={{background:"#fff"}}>
        <div className='container'>
        <h1 className="text-4xl text-center" style={{paddingLeft:"40px",fontWeight:700,margin:"40px 0px"}}>What our clients say?</h1>
          <TestimonialCarousel userSays={userSays} />
        </div>
      </div>
      <section className="bg-gray-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Build Your Dream Project?</h2>
          <p className="mt-2">Contact us today and let’s get started!</p>
          <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-black  font-semibold rounded-lg hover:bg-gray-200">
            Get a Quote
          </button>
          </Link>
        </section>
    </>
  );
}
