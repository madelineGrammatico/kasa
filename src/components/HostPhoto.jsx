import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function HostPhoto() {
    const data = useLoaderData()
    const rent = data[0]
  return (
    <img src={rent.host.picture} className="hostPicture" alt={`profile of${rent.host.name}`}/>
  )
}
