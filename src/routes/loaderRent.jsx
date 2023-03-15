import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export function IsIdCorrect(rent){
    const navigate = useNavigate()
    useEffect(() => { 
        if (!rent) { 
        console.log("hey")
        navigate("/*")}
    })
}
