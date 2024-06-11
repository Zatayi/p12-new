import React from "react";
import { Link } from "react-router-dom";
import BannerHome from "../assets/image/banner_home.jpg"


export default function About() {
	return (
		<>
			<h1>Qui suis-je ?</h1>
			<img src={BannerHome}alt="banner"className="banner-container"></img>
			<p>Je m'appelle Boris Balligand, friand de nouvelles technologies et désireux d'approfondir mes connaissances dans le développement web, 
			j'ai suivi une formation d'intégrateur web.</p>
			<p>En effet, cette dernière m'a permit d'appréhender différents langages tels que le HTML, le CSS et SASS, le javascript. J'ai pu aussi
			me servir d'outils comme les bibliothèques React.js et vite. Afin de pouvoir héberger mes différents projets, j'ai fait appel à Github et Gitbash.
			</p>
			<Link to="/About" className="linkreal">
				Mes réalisations
			</Link>
			
		</>
	);
}