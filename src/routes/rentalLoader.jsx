import { redirect } from "react-router-dom"
import dataRent from "../data/logements.json"

export const rentalLoader = (id) => {
    const data = dataRent.filter((rental) => (
    rental.id === id.slice(1) ))
    console.log(data)
    if (data.length !== 1 ) { return redirect("/home")}
    return data

}
