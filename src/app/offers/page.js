const Offers = () => {
    return (
      <div>
        <div className="parallex">
          <div className='container' style={{background:"white"}}>
          <div className="offer2-header">
    <h1>Exclusive Offers for Your Dream Trip</h1>
  </div>

  <div className="offer2-container">
    <h2>Check Out Our Latest Offers</h2>

    <div className="offer2-card">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=600&h=400&s=1" alt="Beach Trip" />
      <div className="offer-info">
        <h3>Beach Paradise Getaway</h3>
        <p>Relax on the sun-kissed shores with a luxurious 3-day beach vacation package.</p>
        <div className="price">$599</div>
        <a href="#" className="button">Book Now</a>
      </div>
    </div>

    <div className="offer2-card">
      <img src="https://cdn3.vectorstock.com/i/1000x1000/42/17/special-offer-on-business-travel-trip-vector-19364217.jpg" alt="Mountain Adventure" />
      <div className="offer-info">
        <h3>Mountain Adventure</h3>
        <p>Explore the mountains with an adventurous 5-day hiking trip.</p>
        <div className="price">$799</div>
        <a href="#" className="button">Book Now</a>
      </div>
    </div>

    <div className="offer2-card">
      <img src="https://www.indifi.com/blog/wp-content/uploads/2020/03/Offers-to-Customers-For-Travel-Agencies--500x246.jpg" alt="City Tour" />
      <div className="offer-info">
        <h3>City Exploration Tour</h3>
        <p>Discover the wonders of the city with a comprehensive 4-day sightseeing tour.</p>
        <div className="price">$399</div>
        <a href="#" className="button">Book Now</a>
      </div>
    </div>

    <div className="cta-section">
      <h2>Ready to Start Your Journey?</h2>
      <p>Take advantage of these exclusive offers and book your dream trip today!</p>
      <a href="booking.html" className="button">Explore More Offers</a>
    </div>
  </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Offers;
  