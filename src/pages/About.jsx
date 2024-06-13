import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../assets/image/banner_home.webp"
import Htmlicon from "../assets/image/htmlicon.webp"
import Cssicon from "../assets/image/cssicon.webp"
import Sassicon from "../assets/image/sass.webp"
import Jsicon from "../assets/image/JSicon.webp"
import Reacticon from "../assets/image/react.webp"
import Gitbashicon from "../assets/image/gitbashicon.webp"
import Githubicon from "../assets/image/github.webp"
import Carousel from "../components/Carousel"
import agileicon from "../assets/image/agile.png"
import figmaicon from "../assets/image/figma.png"


export default function About() {
	const slides = [
		Htmlicon,
		Cssicon,
		Sassicon,
		Jsicon,
		Reacticon,
		Gitbashicon,
		Githubicon,
		agileicon,
		figmaicon


	  ];
	return (
		<>
			<h1>Qui suis-je ?</h1>
			<img src={BannerHome}alt="banner"className="banner-container"></img>
			<p>Je m'appelle Boris Balligand, friand de nouvelles technologies et désireux d'approfondir mes connaissances dans le développement web, 
			j'ai suivi une formation d'intégrateur web.</p>
			
			<div>
			<h2>Mes compétences</h2>
		  	<Carousel slides={slides} />
			</div>

			<p>En effet, cette dernière m'a permit d'appréhender différents langages tels que le HTML, le CSS et SASS, le javascript. J'ai pu aussi
			me servir d'outils comme les bibliothèques React.js et vite. Afin de pouvoir héberger mes différents projets, j'ai fait appel à Github et Gitbash.
			</p>
			<Link to="/About" className="linkreal">
				Mes réalisations
			</Link>
			
		</>
	);
}
