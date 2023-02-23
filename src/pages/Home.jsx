// import data from "../logements"
import Gallery from "../components/Gallery"
import { Banner } from "../components/Banner";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <Banner/>
      <Gallery/>
    </div>
  );
}

export default Home