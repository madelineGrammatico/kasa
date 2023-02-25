import React from 'react'


import HostName from './HostName'
import HostPhoto from './HostPhoto'

export default function Host() {
  
  return (
    <section className='hostProfile'>
      <HostName/>
      <HostPhoto/>
    </section>
  )
}
