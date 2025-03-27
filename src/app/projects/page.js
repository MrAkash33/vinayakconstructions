"use client";

import AddUserForm from "@/components/AddUserForm";
import Gallery from "@/components/Gallery";
import axios from "axios";
import { useEffect, useState } from "react";

export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData () {
    let response = await axios.get('/api/getProjects')
    setProjects(response.data.projects)
  }
  return (
    <div className="relative bg-gray-100 text-gray-900 mt-24">
      <div className="max-w-6xl mx-auto p-6 text-center relative">
        {/* Background Image - Always Visible */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
        ></div>

        {/* Video - Plays on Top */}
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          className="w-full h-full object-cover z-10 relative"
          onError={() => setVideoError(true)}
          style={{
            backgroundImage: "url('/essentials/06.jpg')", // ✅ Background image
            filter: "brightness(0.5)", // Optional dark overlay
          }}
        >
          <source
            src="https://www.henryboot.co.uk/media/5khhuodn/henry-boot_website_credit_bottomright_080824.mp4"
            type="video/mp4"
          />
        </video>

        {/* Text Content */}
        <h1 className="relative z-20 text-black text-3xl font-bold p-6">
          Innovative projects transforming ideas globally.
        </h1>
        {/* <AddUserForm /> */}
        <section className="px-4 sm:px-6 lg:px-12 py-12">
      {/* Responsive Grid Layout */}
      <div className="max-w-6xl mx-auto py-12 space-y-12">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image - Always in the Left Column */}
              <div className={`flex justify-center ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <img src={project.url} alt={project.heading} className="w-[500px] h-[500px] object-cover rounded-lg" />
              </div>
              
              {/* Text - Always in the Right Column */}
              <div className={`items-center justify-center text-center p-6 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                <h1 className="text-lg font-semibold text-gray-800">{project.heading}</h1>
                <div className="flex items-center justify-center my-6">
                  {/* Left Line */}
                  <div className="h-[2px] w-1/3 bg-gray-400"></div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 bg-gray-600 rounded-full mx-2"></div>

                  {/* Right Line */}
                  <div className="h-[2px] w-1/3 bg-gray-400"></div>
                </div>
                <p className="text-lg font-thin text-gray-600">{project.description}</p>
              </div>
        </div>
      ))}
    </div>
        </div>
    </section>
    
        {/* <Gallery/> */}

        
      </div>
    </div>
  );
}
