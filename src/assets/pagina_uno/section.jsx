
import "./section.css";

import SpotifyWidget from "../spotify_widget/swidget";
import FraseDeAmor from "../phrases/frases";
import Carta from "../carta/carta";
import Cartados from "../cartados/cartados";



function Section() {
  
    return (
      <>

<div className="frases">
      <FraseDeAmor />
      </div>
      
      <div className="container">

      <SpotifyWidget playlistId="2s2n2ts7hIhAiCsG5JPBzp" />
      
      <Carta />

      <Cartados />



      </div>



  
      
      </>
    )
  }

  export default Section;
