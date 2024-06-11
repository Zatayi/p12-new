import { Link } from "react-router-dom";
import logointegrator from "../assets/image/Logo_portfolio.png";


const Header = () => {
    return (
        <div className='header'>
            <img src={logointegrator} alt="logo"></img>
            <nav>
                <Link to="/" >A propos</Link>
                <Link to="/about" >Mes réalisations</Link>
                <Link to="/contact" >Contact</Link>
            </nav>
        </div>
    )
}


export default Header