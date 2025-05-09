import React, { useState, useEffect } from 'react';
import "../phrases/frases.css"


const FraseDeAmor = () => {
  // Array de frases
  const frases = [
    "Gracias por estar en mi vida, preciosa, te quieroo",
    "Sigo soñando con pasear en las nubes con vos...",
    "Non so cosa mi hai fatto, ma ti prego, fammelo ancora",
    "Te quiero hermosaaaaaaa",
    "Ti amo, amore mio",
    "Una vita sola non basta per dirti quanto ti amo",
    "tequiero muchomuchomuchomucho",
    "Te adoro.",
    "Sei tutto quello che ho sempre cercato, eudaimonia.",
    "Sos lo mas lindo que me pasó mi amor",
    "Sueño con ver tu carita hermosa todo el dia, todos los dias...",
    "Me encanta tu voz, tu sonrisa, tus ojos... Me encantas.",
    "Deseo profundamente que logremos todo lo que soñamos",
    "No encuentro felicidad mas grande que verte feliz",
    "I love you mi amor",
  ];

  const [frase, setFrase] = useState('');

  useEffect(() => {

    const obtenerFraseAleatoria = () => {
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      setFrase(frases[indiceAleatorio]);
    };


    obtenerFraseAleatoria();


    const intervalo = setInterval(obtenerFraseAleatoria, 2500);


    return () => clearInterval(intervalo);
  }, [frases]);

  return (
    
    
    <div>
      <p>{frase}</p>
    </div>
  );
};



export default FraseDeAmor;



