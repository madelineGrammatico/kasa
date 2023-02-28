import { useLoaderData } from "react-router-dom";

import bannerAbout from "../asset/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Dropdown from "../components/Dropdown"
import { Banner } from "../components/Banner";

function About() {
  const abouts = useLoaderData()
  return (
    <main className="About">
      <Banner banner={bannerAbout}/>
      <section className="dropdown__container">
        {abouts.map((about) => <Dropdown title={about.title} body={about.body} key={about.id}/>)}
      </section>
    </main>
  );
}

export default About