
import { useLoaderData } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import NavBar from "../components/NavBar"

export function Rental() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <NavBar/>
            <p>{data[0].title}</p>
         
            <Dropdown title="description" body="body" active="false"/>
        </div>
    )
}