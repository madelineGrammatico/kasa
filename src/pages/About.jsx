// import { useLoaderData } from "react-router-dom";

import bannerAbout from "../asset/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import { Dropdown } from "../components/Dropdown"
import { Banner } from "../components/Banner";

import dataAbout from "../data/about.json"

function About() {
  const abouts = dataAbout
  return (
    <main className="About">
      <Banner banner={bannerAbout}/>
      <section className="dropdown__container">
        {
          abouts.map((about) => 
            <Dropdown title={ about.title } key={ about.id }>
              <p className="dropdown__body">
                { about.body }
              </p>
            </Dropdown>
          )
        }
      </section>
    </main>
  );
}

export default About