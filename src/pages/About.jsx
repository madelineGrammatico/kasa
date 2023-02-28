import NavBar from "../components/NavBar";
import bannerAbout from "../asset/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"


import { useLoaderData } from "react-router-dom";
import Dropdown from "../components/Dropdown"
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

function About() {
  const abouts = useLoaderData()
  return (
    <div className="About">
      <NavBar/>
      <Banner banner={bannerAbout}/>
      <section className="dropdown__container">
        {abouts.map((about) => <Dropdown title={about.title} body={about.body} key={about.id}/>)}
      </section>
      <Footer/>
    </div>
  );
}

export default About