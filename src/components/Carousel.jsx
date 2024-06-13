import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change de slide toutes les 5 secondes
    return () => clearInterval(interval);
  }, [slides.length, nextSlide]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide}
            alt={`Slide ${idx}`}
            className={`carousel-item ${index === idx ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;