import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Carrousel() {
    const data = useLoaderData()
    const rent = data[0]
  return (
    <section className='carrousel'>
      <img src={rent.cover} alt={rent.title}/>
    </section>
    
  )
}
