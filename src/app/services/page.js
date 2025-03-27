import Link from "next/link";

export default function Services() {
    const services = [
      { id: 1, title: "Building Construction", image: "/photos/construction1.jpg", description: "High-quality commercial and residential construction services." },
      { id: 2, title: "Interior Design", image: "/photos/interiordesign.jpg", description: "Innovative designs to transform your spaces beautifully." },
      { id: 3, title: "Renovation & Remodeling", image: "/photos/modeling.jpg", description: "Revamp your property with our professional renovation services." },
      { id: 4, title: "Architecture Planning", image: "/photos/planning.jpg", description: "Modern architecture solutions tailored to your needs." },
      { id: 5, title: "Flooring & Tiling", image: "/photos/flooring.jpg", description: "Durable and stylish flooring solutions for homes and offices." },
      { id: 6, title: "House Painting", image: "/photos/gallery16.jpg", description: "Enhance your property’s aesthetic with expert painting services." },
      { id: 7, title: "Elevator Manufacturer", image: "/photos/elevator.jpg", description: "Elevator manufacturer specializes in lift engineering, installation, innovation, and safety." },
      { id: 8, title: "Furniture Maker", image: "/photos/wood.jpg", description: "Furniture maker crafts wood wardrobes with skill, design, precision, quality, and creativity." },
      { id: 9, title: "Glass Fabricator", image: "/photos/glassgate.jpg", description: "Glass fabricator designs, cuts, shapes, polishes, installs, and customizes glass structures." },
    ];
  
    const testimonials = [
      { name: "John Doe", review: "They did an amazing job on our house renovation. Highly recommend!", image: "/photos/testimonial1.jpg" },
      { name: "Jane Smith", review: "Professional and timely service. The best construction company!", image: "/photos/testimonial2.jpg" },
      { name: "Michael Brown", review: "Quality work at an affordable price. Would hire them again!", image: "/photos/testimonial3.jpg" },
    ];
  
    const faqs = [
      { question: "How long does a construction project take?", answer: "Project duration depends on the size and complexity. We provide detailed timelines before starting." },
      { question: "Do you offer free consultations?", answer: "Yes! We provide free consultations to discuss your project requirements." },
      { question: "What areas do you serve?", answer: "We offer construction services in multiple regions. Contact us to check availability." },
    ];
  
    return (
      <div>
        {/* Hero Section */}
        {/* <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/hero-construction.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="text-white text-5xl font-bold relative z-10">Our Services</h1>
        </section> */}

<div className="relative w-full mb-6">
          <section className="flex h-[360px] ">
                {/* Left Div (30% Width) */}
                <div className="w-1/3 bg-gray-800 text-white flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    >
                    <source src="photos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>

                {/* Right Div (70% Width) - Video */}
                <div className="w-2/3">
                    <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    >
                    <source src="photos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </section>
              {/* <h1 style={{fontSize:"30px",padding:"20px",textAlign:"center"}}>Innovative projects transforming ideas globally.</h1> */}
        </div>
  
        {/* Services Grid */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                    <button className="mt-4 px-6 py-2 bg-customBrown text-white rounded-lg hover:bg-gray-700">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">Our experienced professionals ensure high-quality results.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">We provide cost-effective solutions without compromising quality.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                <p className="text-gray-600">We complete projects within deadlines, ensuring satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ Section */}
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
  
        {/* Call To Action */}
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
    );
  }
  