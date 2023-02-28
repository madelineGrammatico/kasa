import {useState}  from 'react'
import { useLoaderData } from 'react-router-dom'

import { ReactComponent as LeftChevron } from "../asset/chevron-left-solid.svg"
import { ReactComponent as RightChevron } from "../asset/chevron-right-solid.svg"

export default function Carrousel({pictures}) {
    const [rent] = useLoaderData()
    const [imgCarrousel, setImgCarrousel] = useState(0)
    const activeCarousel = rent.pictures.length > 1

    function previousImg() {
      imgCarrousel <= 0 ? setImgCarrousel(pictures.length -1): setImgCarrousel(imgCarrousel - 1)
    }
    function nextImg () {
      (imgCarrousel +1) < pictures.length ? setImgCarrousel(imgCarrousel +1): setImgCarrousel(0)
  }
  
  return (
    <section className='carrousel'>
      <img src={pictures[imgCarrousel]} alt={rent.title}/>
      { activeCarousel && 
        <>
          <LeftChevron onClick={ previousImg } className='left' alt="précedent"/> 
          <RightChevron onClick={ nextImg } className='right' alt="suivant"/>
          <p className='carrousel__page'>{imgCarrousel + 1} / {pictures.length}</p>
        </> }
    </section>
    
  )
}
