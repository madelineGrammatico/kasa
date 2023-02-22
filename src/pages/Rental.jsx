// import data from "../logements"
import { useLoaderData, useParams } from "react-router-dom"
import Dropdown from "../components/Dropdown"

export default function Rental() {
    let { id } = useParams()
    const data = useLoaderData()
    const result = data.filter(rental => rental.id === id.slice(1) )
    const rental = result[0]
    return (
        <div>
            <p>ceci est une location </p>
            <p>{rental.title}</p>
            <Dropdown title="description" body="body" active="false"/>
        </div>
    )
}

export const rentalLoader = async () => {
    const res = await fetch("../logements.json")
    console.log(res.json())

    return res.json()

}