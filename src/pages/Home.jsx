import data from "../logements"
import Gallery from "../components/Gallery"
import { Banner } from "../components/Banner";

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <Gallery/>
    </div>
  );
}

export default Home