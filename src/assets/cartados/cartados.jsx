import React from 'react';
import './Cartados.css';
import FT4 from "../img/FT4.png";

const Cartados = () => {
  const parrafos = [
    "Espero que siempre sepas lo importante que sos para mi, y lo feliz que me hace que formes parte de mi vida.",
    "Me muero de ganas de que ya podamos estar juntos...",
    "Te quiero muchísimo mi amor. Muchísimo. ♡",

  ];

  return (
    <div className="carta-containerdos">
      <div className="carta">
        {parrafos.map((p, index) =>
          p.trim() === "" ? (
            <div key={index} style={{ marginBottom: '1.5em' }} />
          ) : (
            <p
              key={index}
              className="fade-in"
              style={{
                animationDelay: `${index * 0.05}s`,
                whiteSpace: 'pre-line'
              }}
            >
              {p}
            </p>
          )
        )}
      </div>
      <div className="fotodos"><img src={FT4} alt="Descripción" /></div>

    </div>
  );
};

export default Cartados;
