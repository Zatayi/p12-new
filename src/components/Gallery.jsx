import React from "react";
import { Link } from "react-router-dom";
import ohmyfood from "../assets/image/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import sophie from "../assets/image/sophie-bluel.png";


const Gallery = () => {
  return (
  <div className="home_gallery">
    
    <article>
      <a href="https://github.com/Zatayi/ohmyfood" target="_blank" rel="noopener noreferrer">
    <img src={ohmyfood} alt="Oh My Food" />
    <p>ohmyfood est un site de listing de restaurants, chacun avec ses propres menus ainsi que des animations.</p>
  </a>
  </article>
    <article>
    <a href="https://github.com/Zatayi/P6-Sophie-Bluel" target="_blank" rel="noopener noreferrer">
    <img src={sophie} alt="Oh My Food" />
  </a>
  </article>
  </div>
  );
};

export default Gallery;