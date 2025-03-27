import Image from 'next/image';
import Link from 'next/link';
import { FaBullseye, FaLightbulb } from "react-icons/fa";
export default function MissionVission() {

  return (
    <div className='container'>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto p-6 text-center mt-8">
        <h1 className="text-4xl font-bold mt-4">Mission & Vision</h1>
        <div className="relative w-full h-64 mb-6 mt-4">
          <Image
            src="/assets/mission.jpg"
            alt="Travel Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition duration-300 hover:bg-blue-600"
        >
        </button>
        <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
      </div>

        <p className='my-4'>At Vinayak Construction Company, our Mission & Vision reflect our commitment to excellence, innovation, and sustainability in the construction industry.</p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
          <FaBullseye className="text-blue-600 text-3xl mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <ul className="list-disc list-inside text-gray-600 text-left">
              <li>Deliver high-quality, sustainable, and innovative construction solutions.</li>
              <li>Provide cost-effective and efficient construction services.</li>
              <li>Ensure timely project completion without compromising on quality.</li>
              <li>Foster long-term relationships with clients through transparency and trust.</li>
              <li>Incorporate eco-friendly practices to promote sustainability.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
          <FaLightbulb className="text-blue-600 text-3xl mr-4" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <ul className="list-disc list-inside text-gray-600 text-left">
              <li>Be a leading construction company recognized for excellence and integrity.</li>
              <li>Expand presence across residential, commercial, and infrastructure sectors.</li>
              <li>Adopt cutting-edge technology and modern construction methodologies.</li>
              <li>Set new benchmarks in quality, safety, and environmental responsibility.</li>
              <li>Contribute to nation-building by developing world-class infrastructure.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Build Your Dream Project?</h2>
          <p className="mt-2">Contact us today and let’s get started!</p>
          <Link href="/contact">
          <button className="mt-4 px-6 py-3 bg-black  font-semibold rounded-lg hover:bg-gray-200">
            Get a Quote
          </button>
          </Link>
        </section>
      </div>
    </div>
    </div>
  );
}
