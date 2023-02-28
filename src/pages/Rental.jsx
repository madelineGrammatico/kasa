import { useLoaderData } from "react-router-dom"

import Dropdown from "../components/Dropdown"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import Tags from "../components/Tags"

export function Rental() {
    const data = useLoaderData()
    const rent = data[0]

    return (
        <main className="rental__container">
            <Carrousel/>
            <div className="rental__presentation">
                <h1>{rent.title}</h1>
                <p className="rental__location">{rent.location}</p>
            </div>
            
                <Host/>
                <Rating rating={rent.rating}/>
        
            <Tags tags={rent.tags}/>
            <section className="dropdown__container">
                <Dropdown title="Description" body={rent.description}/>
                <Dropdown title="Équipements" body={rent.equipments}/>
            </section> 
            
        </main>
    )
}