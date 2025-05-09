import React from 'react';
import './Carta.css';
import FT from "../img/FT.png";
import FT2 from "../img/FT2.png";
import FT3 from "../img/FT3.png";

const Carta = () => {
  const parrafos = [
    "Compañera",
    "usted sabe",
    "puede contar",
    "conmigo",
    "no hasta dos",
    "o hasta diez",
    "sino contar",
    "conmigo",

    "",

    "si alguna vez",
    "advierte",
    "que la miro a los ojos",
    "y una veta de amor",
    "reconoce en los míos",
    "no alerte sus fusiles",
    "ni piense qué delirio",
    "a pesar de la veta",
    "o tal vez porque existe",
    "usted puede contar",
    "conmigo",

    "",

    "si otras veces",
    "me encuentra",
    "huraño sin motivo",
    "no piense qué flojera",
    "igual puede contar",
    "conmigo",

    "",

    "pero hagamos un trato",
    "yo quisiera contar",
    "con usted",

    "",

    "es tan lindo",
    "saber que usted existe",
    "uno se siente vivo",
    "y cuando digo esto",
    "quiero decir contar",
    "aunque sea hasta dos",
    "aunque sea hasta cinco",
    "no ya para que acuda",
    "presurosa en mi auxilio",
    "sino para saber",
    "a ciencia cierta",
    "que usted sabe que puede",
    "contar conmigo."
  ];

  return (
    <div className="carta-container">
      <div className="corazones"></div>
      
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

      <div className="foto"><img src={FT} alt="Descripción" /></div>
      <div className="foto"><img src={FT2} alt="Descripción" /></div>
      <div className="foto"><img src={FT3} alt="Descripción" /></div>
    </div>
  );
};

export default Carta;
