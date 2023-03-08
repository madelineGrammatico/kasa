import React from 'react'

export  function HostProfil({name, profil}) {
  return (
    <img src={profil} className="hostPicture" alt={`profile of${name}`}/>
  )
}

