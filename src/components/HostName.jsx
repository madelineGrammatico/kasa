import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function HostName() {
    const data = useLoaderData()
    const rent = data[0]
    const array = rent.host.name.split(" ")
    const nameArray = []
    let name
    let lastName
    array.forEach((word, index) => {
        if (array.length > (index +1)) {
            nameArray.push(word)
        } else {
            name = nameArray.join(" ")
            lastName = word
        }   
    })
  return (
    <div className='hostName'>
        <p>{name}</p>
        <p>{lastName}</p>
    </div>
  )
}
