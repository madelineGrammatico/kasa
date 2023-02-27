import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="Page404">
      <NavBar/>
      <section className="messageError">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="Page404__returnHome">Retourner sur la page d’accueil </Link>
      </section>
    </main>
  );
}

export default Page404