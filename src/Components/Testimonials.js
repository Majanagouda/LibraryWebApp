import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonial data from your database or API
    fetch('your-api-endpoint-for-testimonials')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  // Check if testimonials is empty
  if (testimonials.length === 0) {
    return (
      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>Sorry, there are currently no testimonials available. Please check back later.</p>
      </section>
    );
  }

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <img src={testimonial.imageUrl} alt={testimonial.name} />
            <p>{testimonial.description}</p>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;