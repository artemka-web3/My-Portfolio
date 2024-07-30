// src/Carousel.js
import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInnerRef = useRef(null);

  const updateCarousel = () => {
    const width = carouselInnerRef.current.clientWidth;
    carouselInnerRef.current.style.transform = `translateX(${-width * currentIndex}px)`;
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => updateCarousel();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className="carousel" {...handlers}>
      <div className="carousel-inner" ref={carouselInnerRef}>
        {items.map((src, index) => (
          <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>‹</button>
      <button className="carousel-control-next" onClick={nextSlide}>›</button>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;