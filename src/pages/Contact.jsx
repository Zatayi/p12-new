import { Link } from "react-router-dom";

export default function Contact() {
	return (
	<div className="contact-form">
        <h2>Contactez-moi</h2>
    <form action="https://formspree.io/f/mqkrrabn"
    method="POST" className="form">
        <div className="form-name">
            <label>Nom: </label>
            <input type="text" id="name" name="name" required></input>
        </div>

        <div className="form-mail">
            <label>Email: </label>
            <input type="email" id="email" name="email" required></input>
        </div>
        
        <div className="form-mess">
            <label>Message: </label>
            <textarea id="message" name="message" rows="8" required></textarea>
        </div>
        <button type="submit" className="form-button">Envoyer</button>
    </form>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}