import React, { useEffect, useRef } from 'react';
import "./Rain.css";

const Rain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numberOfDrops = 100;
    const drops = [];

    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('rain-drop');
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${Math.random() * 2 + 1}s`; /* Duración aleatoria entre 1s y 3s */
      container.appendChild(drop);
      drops.push(drop);
    }

    return () => {
      drops.forEach(drop => container.removeChild(drop));
    };
  }, []);

  return <div ref={containerRef} className="rain-container"></div>;
};

export default Rain;
