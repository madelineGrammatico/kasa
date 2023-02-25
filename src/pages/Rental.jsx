import { useLoaderData } from "react-router-dom"

import Dropdown from "../components/Dropdown"
import NavBar from "../components/NavBar"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"

export function Rental() {
    const data = useLoaderData()
    const rent = data[0]

    return (
        <div>
            <NavBar/>
            <Carrousel/>
            
            <h1>{rent.title}</h1>
            <p>{rent.location}</p>
            
             <Tag tags={rent.tags}/>
           
            <div>
                <Host/>
                <Rating rating={rent.rating}/>
            </div>
            <section className="dropdown__container">
                <Dropdown title="Description" body={rent.description}/>
                <Dropdown title="Équipements" body={rent.equipments}/>
            </section> 
        </div>
    )
}