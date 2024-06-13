import { Link } from "react-router-dom";
import Contactimg from "../assets/image/depositphotos_83882494-stock-photo-keyboard-contact-us-black.webp" 
import './Contact.scss'


export default function Contact() {
	return (
	<div className="contact-form">
        <h2>Contactez-moi</h2>
    <div className="contact-part">
        <img src={Contactimg}alt="banner"className="banner-container"></img>
    <form action="https://formspree.io/f/mqkrrabn"
    method="POST" className="form">
        <div className="form-name">
            <label for="name">Nom: </label>
            <input type="text" id="name" name="name" placeholder="Nom Prénom" required></input>
        </div>

        <div className="form-mail">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="mail@exemple.com"required></input>
        </div>
        
        <div className="form-mess">
            <label for="message">Message: </label>
            <textarea id="message" name="message" rows="8" required></textarea>
        </div>
        <button type="submit" className="form-button">Envoyer</button>
    </form>
    </div>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}