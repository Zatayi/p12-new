import React from "react";
import ohmyfood from "../assets/image/ohmyfood.webp";
import sophie from "../assets/image/sophie-bluel.webp";
import Nina from "../assets/image/ninacarducci.webp"
import Featuredescription from "../components/Featuredescription"
import projet2 from "../assets/image/projet2.png"
import projet3 from "../assets/image/projet3.jpg"
import projet1 from "../assets/image/projet1.png"

const Gallery = () => {
  return (
  <div className="home_gallery">
    <Featuredescription
    imgSrc={ohmyfood}
    alt="ohmyfood img"
    title="Ohmyfood"
    text="ohmyfood est un site de listing de restaurants, 
      chacun avec ses propres menus ainsi que des animations.
       Le défi de ce site résidait à partir d'un code en mobile-first puis de le modifier
        via des media query pour le rendre responsive pour des écrans plus larges."
    secondtitle="Compétences acquises"
    imgicon={projet1}
    alticon="iconcompetences"
    competences1="Intégrer une maquette en mobile-first"
    competences2="Mettre en œuvre des animations CSS"
    competences3="Versionner son projet avec Git et Github"
    />
    <Featuredescription
    imgSrc={sophie}
    alt="Sophie Bluel img"
    title="Sophie Bluel"
    text="Ce projet avait pour but de recréer le site d'une photographe Sophie Bluel en transformant du HTML
       en javascript, il m'a permit notamment d'apprendre à utiliser fetch pour récupérer des données du back-end."
    secondtitle="Compétences acquises"
    imgicon={projet2}
    alticon="iconcompetences"
    competences1="Gérer les événements utilisateurs avec JavaScript -Manipuler les éléments du DOM avec JavaScript"
    competences2="Manipuler les éléments du DOM avec JavaScript"
    competences3="Récupérer les données utilisateurs dans le JavaScript via des formulaires"
    
    />
    <Featuredescription
    imgSrc={Nina}
    alt="Nina Carducci img"
    title="Nina Carducci"
    text="Le site de Nina Carducci est un site de gallerie de photographies. Dans ce projet,
       le but était de travailler le SEO, l'accessibilité et les performances du site."
    secondtitle="Compétences acquises"
    imgicon={projet3}
    alticon="iconcompetences"
    competences1="Optimiser les performances d'un site web"
    competences2="Lister et expliquer les différentes modifications apportées"
    competences3="Faire un comparatif des résultats d'optimisation avant et après intervention"
    />  
    </div>
  
  );
};

export default Gallery;