import Gallery from "../components/Gallery"
import { Banner } from "../components/Banner";
import bannerHome from "../asset/banner_Home.png"

function Home() {
  return (
    <main className="Home">
      <Banner banner ={bannerHome} text="Chez vous, partout et ailleurs"/>
      <Gallery/>
    </main>
  );
}

export default Home