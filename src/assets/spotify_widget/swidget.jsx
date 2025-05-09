
import "./swidget.css";




const SpotifyWidget = ({ playlistId }) => {
    return (
      <div className="spotify_container">
        {        <iframe src="https://open.spotify.com/embed/playlist/2s2n2ts7hIhAiCsG5JPBzp?utm_source=generator&theme=0" width="90%" height="200rem" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        }

      </div>
    );
  };
  
  
  export default SpotifyWidget;
