import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hi, I am from Vinayak Construction Company.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <>
    <footer 
    className={styles.footer} 
    style={{
      backgroundImage: "url('/essentials/shiny-night-city.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      padding: "40px 40px",
      color: "white",
    }}
  >
    {/* Overlay for Opacity Effect */}
    <div 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: 0.1,  // Adjust opacity
        zIndex: 1
      }}
    ></div>
  
    <div 
      className={styles.footerContainer} 
      style={{
        display: "flex", 
        justifyContent: "space-between",
        position: "relative",
        zIndex: 2 // Keeps content above the overlay
      }}
    >
      <div className={styles.socialSection}>
        <Image
          src="/essentials/logo_white.png"
          alt="logo"
          width={200}
          height={200}
        />
        <h2>Connect on social</h2>
        <div className={styles.socialIcons} style={{ display: "flex", gap: "20px", marginTop: "0px" }}>
          <a href={whatsappLink} className={styles.socialIcon} aria-label="Facebook">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
  
      <div className={styles.linksSection}>
        <ul>
          <li><a href="/about">About us</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/privacy-policy">Privacy policy</a></li>
          <li><a href="/terms-condition">Terms & conditions</a></li>
          <li><a href="/mission-vision">Mission & Vision</a></li>
        </ul>
      </div>
  
      <div className={styles.addressSection}>
        <p style={{ textAlign: "left" }}><strong>Registered Office</strong></p>
        <p style={{ textAlign: "left" }}>Flat no 101,Parsh Chhaya Apartment, Bal Mandir Road </p>
        <p style={{ textAlign: "left" }}>Bhimganjmandi, Kota, Rajasthan, 324002</p>
        <p style={{ textAlign: "left" }}>Vaibhav Saxena -  +91 6376-635379 & 094133 50792</p>
        <p style={{ textAlign: "left" }}>Ikramuddin khan - +91 94141 76392 & +91 861-9470159</p>
        <p style={{ textAlign: "left" }}>
          Email:{" "}
          <a href="mailto:Vinayakconstructions9255@gmail.com">
            Vinayakconstructions9255@gmail.com
          </a>
        </p>
      </div>
    </div>
  
    {/* <div className={styles.footerBottom} style={{ position: "relative", zIndex: 2 }}>
      <h1 style={{ fontSize: "20px" }}>Vinayak Construction</h1>
    </div> */}

  </footer>
    <div className="w-full bg-customBrown text-white text-center py-2 text-sm bottom-0 left-0 z-50">
      <p>© 2025 All rights reserved.</p>
      <p>Designed By <a href="https://aswebtech.online/">Aswebtech.online</a></p>
    </div>
    
    </>
  
  );
};

export default Footer;
