// import data from "../logements"
import Gallery from "../components/Gallery"
import { Banner } from "../components/Banner";
import NavBar from "../components/NavBar";
import bannerHome from "../asset/banner_Home.png"

function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <Banner banner ={bannerHome} text="Chez vous, partout et ailleurs"/>
      <Gallery/>
    </div>
  );
}

export default Home