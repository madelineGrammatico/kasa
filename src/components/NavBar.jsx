import { NavLink } from "react-router-dom";
import { ReactComponent as Logo} from "../asset/LOGO.svg"

export default function NavBar() {
  const arrayNav = [
    { name:"Accueil", href:"/" },
    { name:"A propos", href:"/about" }
  ]
  return (
    <header className="NavBar">
        <Logo className="logo" alt="kasa"/>
        <nav>
            {arrayNav.map((nav) => (
              <NavLink 
                key={nav.name}
                to={nav.href} 
                className={({isActive}) => { return (isActive ?  "active": null) }}
              >{nav.name}</NavLink>
            ))}
        </nav>
    </header>
  )
}
