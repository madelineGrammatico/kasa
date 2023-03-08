import React from 'react'


export default function Host({name}, {picture}) {
  const array = name.split(" ")
  const firstName = array.shift()
  const lastName = array.join(" ")

  return (
    <section className='hostProfile'>
      <div className='hostName'>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={picture} className="hostPicture" alt={`profile of${name}`}/>
    </section>
  )
}
