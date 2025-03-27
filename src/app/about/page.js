import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaTools, FaClock, FaUsers, FaCheckCircle, FaGlobe, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <div className=''>
    <div className="min-h-screen bg-gray-100 text-gray-900 mt-20">
      <div className="max-w-6xl mx-auto p-6 text-center">
        {/* <h1 className="text-4xl font-bold mb-4">About Us</h1> */}
        {/* <p className="text-lg mb-6">
          Welcome to our travel platform, where adventure meets convenience.
          Discover unforgettable destinations and seamless experiences.
        </p> */}
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/assets/about.jpg"
            alt="Travel Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <section className="bg-gray-100 py-12 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Building Excellence, Delivering Trust
            </h2>
            <p className="text-lg text-gray-600 mb-10 justify-center">
            Vinayak Construction Company is a renowned name in the construction industry, specializing in residential, commercial, PEB (Pre-Engineered Buildings), warehouse, and infrastructure development projects across India. With a strong presence in multiple regions, we have established ourselves as a trusted partner in delivering top-notch construction solutions with innovation, efficiency, and integrity.
            </p>
            <p className="text-lg text-gray-600 mb-10">
            <strong>Vinayak Construction Company</strong> is a leading construction firm specializing in <strong>residential</strong>, commercial, PEB, warehouse, and infrastructure development<strong> projects</strong> across India. With <strong>decades of experience</strong>, we are committed to delivering <strong>high-quality, innovative, and sustainable</strong> construction solutions tailored to client needs. Our expertise spans <strong>construction management, renovation, interior design, and large-scale infrastructure projects</strong> such as roads and bridges.  
            We emphasize <strong>customer satisfaction, quality compliance, and timely project completion</strong>, ensuring excellence in every endeavor. Utilizing <strong>cutting-edge technology, skilled professionals, and modern construction practices</strong>, we bring visions to life. At <strong>Vinayak Construction</strong>, we don’t just build structures—we build <strong>trust, relationships, and a better future</strong>.Let’s build together!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaBuilding className="text-blue-600 text-16xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h3>
                <p className="text-gray-600">
                  With decades of experience, Vinayak Construction Company has successfully completed a wide range of projects, from luxurious homes and modern office spaces to large-scale industrial and infrastructure developments.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaTools className="text-blue-600 text-9xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 ">Our Services</h3>
                <ul className="list-none list-inside text-gray-600 text-left">
                  <li>🏗 Construction & Project Management</li>
                  <li>🏢 PEB & Warehouse Construction</li>
                  <li>🏡 Renovation & Interior Design</li>
                  <li>🚧 Infrastructure Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              {/* <FaCheckCircle className="text-blue-600 text-3xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
                <ul className="list-none list-inside text-gray-600  text-left">
                  <li>Expertise & Experience</li>
                  <li>Customer-Centric Approach</li>
                  <li>Quality & Compliance</li>
                  <li>Timely Project Delivery</li>
                  <li>Cutting-Edge Technology</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
              {/* <FaGlobe className="text-blue-600 text-3xl mr-4" /> */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision & Mission</h3>
                <p className="text-gray-600">
                  Our vision is to be a leading name in the construction industry, recognized for delivering world-class projects that redefine infrastructure and real estate development in India.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <FaHandshake className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Hands with Us!</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              At Vinayak Construction, we don’t just build structures; we create landmarks, shape skylines, and build the future.
            </p>
            <Link href="/contact">
              <button
                className="w-[200] m-[8] bg-gradient-to-r from-customBrown to-customBrown hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full items-center gap-2 shadow-xl transition-all transform hover:scale-110 active:scale-95 border border-white/30 mt-4"
              >
                                Contact Us Today
              </button>
                </Link>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
