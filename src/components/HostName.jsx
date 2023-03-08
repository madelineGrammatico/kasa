import React from 'react'

export function HostName({firstName, lastName}) {
  console.log(firstName, lastName)
   
  return (
    <div className='hostName'>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  )
}
