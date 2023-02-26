import NavBar from "../components/NavBar";
import bannerAbout from "../asset/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"


import { useLoaderData } from "react-router-dom";
import Dropdown from "../components/Dropdown"
import { Banner } from "../components/Banner";

function About() {
  const abouts = useLoaderData()
  console.log(abouts)
  return (
    <div className="About">
      <NavBar/>
      <Banner banner={bannerAbout}/>
      <section className="dropdown__container">
        {abouts.map((about) => <Dropdown title={about.title} body={about.body} key={about.id}/>)}
      </section>
    </div>
  );
}

export default About