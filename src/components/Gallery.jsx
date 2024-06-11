import React from "react";
import { Link } from "react-router-dom";
import ohmyfood from "../assets/image/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import sophie from "../assets/image/sophie-bluel.png";
import Nina from "../assets/image/ninacarducci.webp"

const Gallery = () => {
  return (
  <div className="home_gallery">
    
    <article>
      <a href="https://github.com/Zatayi/ohmyfood" target="_blank" rel="noopener noreferrer">
    <img src={ohmyfood} alt="Oh My Food" />
    <div className="description">
    <h2>Oh my food</h2>
    <p>ohmyfood est un site de listing de restaurants, chacun avec ses propres menus ainsi que des animations. Le défi de ce site résidait à partir d'un code en mobile-first puis de le modifier via des media query pour le rendre responsive pour des écrans plus larges.</p>
    </div>
  </a>
  </article>
    <article>
    <a href="https://github.com/Zatayi/P6-Sophie-Bluel" target="_blank" rel="noopener noreferrer">
    <img src={sophie} alt="Sophie Bluel" />
    <div className="description">
    <h2>Sophie Bluel</h2>
    <p>Ce projet avait pour but de recréer le site d'une photographe Sophie Bluel en transformant du HTML en javascript, il m'a permit notamment d'apprendre à utiliser fetch pour récupérer des données du back-end.</p>
    </div>
  </a>
  </article>
  <article>
    <a href="https://github.com/Zatayi/p9nina" target="_blank" rel="noopener noreferrer">
    <img src={Nina} alt="Nina Carducci" />
    <div className="description">
    <h2>Nina Carducci</h2>
    <p>Le site de Nina Carducci est un site de gallerie de photographies. Dans ce projet, le but était de coder différentes modales ainsi que d'ajouter un système de filtres fonctionnel sans rechargement de la page</p>
    </div>
  </a>
  </article>
  </div>
  );
};

export default Gallery;