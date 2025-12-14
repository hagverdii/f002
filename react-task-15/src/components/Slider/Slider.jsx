import React, { useState } from "react";
import "./slider.css";

export default function Slider({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='slider-container'>
      <img src={images[current]} alt='slide' className='slider-image' />

      <button onClick={prevSlide} className='slider-btn left-btn'>
        {"<<"}
      </button>

      <button onClick={nextSlide} className='slider-btn right-btn'>
        {">>"}
      </button>

      <div className='dots'>
        {images.map((_, index) => (
          <div key={index} className={`dot ${current === index ? "active" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}
