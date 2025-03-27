"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone:""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" ,phone:""});
      } else {
        setMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-0 bg-gray-100">
            <div className="relative w-full h-80 mb-6">
              <Image
                src="/essentials/contactBanner.jpg"
                alt="Travel Banner"
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </div>
      <div className="max-w-5xl mx-auto px-6">

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
            <FaPhoneAlt size={40} className="text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600 mt-2">
            Vaibhav Saxena - +91 6376-635379 & 094133 50792<br></br>
            Ikramuddin khan - +91 94141 76392 & +91 861-947015
            </p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
            <FaMapMarkerAlt size={40} className="text-red-600 mb-3" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600 mt-2">Flat no 101,Parsh Chhaya Apartment, Bal Mandir Road
<br></br>
Bhimganjmandi, Kota, Rajasthan, 324002</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
            <FaEnvelope size={40} className="text-green-600 mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600 mt-2">Vinayakconstructions9255@gmail.com
              <br></br>
              vinayakconstructions101@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-customBrown"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Contact Number</label>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Your Contact Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-customBrown text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {message && <p className="text-center mt-4 font-semibold">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
