import React from "react";
import { useState } from "react";
import "./App.css";

const images = [
  "./img/moonrise-minimal-4k-1i.jpg",
  "./img/pexels-aleksandar-pasaric-325185.jpg",
  "./img/pexels-cesar-perez-733745.jpg",
  "./img/pexels-eberhard-grossgasteiger-1367192.jpg",
  "./img/pexels-janez-podnar-1424246.jpg",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="main-container">
      <h1>IMAGE SLIDER</h1>
      <button onClick={handlePrev}>Prev</button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ transform: `translateX(-${100 * currentIndex}%)` }}
          />
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
