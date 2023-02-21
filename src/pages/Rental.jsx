import data from "../logements"
import { useParams } from "react-router-dom"
export default function Rental() {
    let { id } = useParams()
    console.log( id )
    const result = data.filter(rental => rental.id === id.slice(1) )
    const rental = result[0]
    return (
        <div>
            <p>ceci est une location </p>
            <p>{rental.title}</p>
        </div>
    )
}
