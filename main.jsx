import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    title: "Mountain Escape",
    text: "Explore beautiful landscapes and peaceful destinations."
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    title: "Tropical Beach",
    text: "Relax beside the ocean and enjoy a bright summer view."
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    title: "Nature Trails",
    text: "Discover calm forests, lakes and natural beauty."
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    title: "Adventure",
    text: "A simple image carousel built with React Hooks."
  }
];

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="page">
      <header>
        <h1>Image Carousel</h1>
        <p>React Hooks Project</p>
      </header>

      <main className="carousel-card">
        <div className="image-wrap">
          <img src={images[current].url} alt={images[current].title} />
          <button className="arrow left" onClick={prevSlide}>‹</button>
          <button className="arrow right" onClick={nextSlide}>›</button>

          <div className="caption">
            <h2>{images[current].title}</h2>
            <p>{images[current].text}</p>
          </div>
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="counter">
          {current + 1} / {images.length}
        </div>
      </main>

      <footer>
        <p>Designed and Developed by <strong>Rithika L</strong> | Register No: 24900204</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
