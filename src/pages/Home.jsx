import data from "../logements"
import Gallery from "../components/Gallery"

console.log(data)
function Home() {
  return (
    <div className="Home">
      <Gallery/>
    </div>
  );
}

export default Home