import { useParams } from "react-router-dom";

export function rentalLoader() {
    let {id} = useParams


    return (
        fetch(`../logements/${id}.json`)
    )
}