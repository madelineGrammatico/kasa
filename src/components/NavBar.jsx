import {Link} from "react-router-dom";
import logo from "../asset/LOGO.svg"

export default function NavBar() {
  return (
    <header>
        <img src={logo} className="logo" alt="kasa"/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    </header>
  )
}
