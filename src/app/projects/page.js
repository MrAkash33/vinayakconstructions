"use client";

import Gallery from "@/components/Gallery";
import { useState } from "react";

export default function VideoSection() {
  const [videoError, setVideoError] = useState(false);

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
        <Gallery/>
      </div>
    </div>
  );
}
