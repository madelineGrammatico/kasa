import {useState}  from 'react'
import { useLoaderData } from 'react-router-dom'

import { ReactComponent as LeftChevron } from "../asset/chevron-left-solid.svg"
import { ReactComponent as RightChevron } from "../asset/chevron-right-solid.svg"

export default function Carrousel() {
    const data = useLoaderData()
    const rent = data[0]
    const imgCarouselState = useState(0)
    const imgCarrousel = imgCarouselState[0]
    const setImgCarrousel = imgCarouselState[1]
    const activeCarousel = rent.pictures.length > 1

    function previousImg() {
      imgCarrousel <= 0 ? setImgCarrousel(rent.pictures.length -1): setImgCarrousel(imgCarrousel - 1)
    }
    function nextImg () {
      (imgCarrousel +1) < rent.pictures.length ? setImgCarrousel(imgCarrousel +1): setImgCarrousel(0)
  }
  
  return (
    <section className='carrousel'>
      <img src={rent.pictures[imgCarrousel]} alt={rent.title}/>
      { activeCarousel && <LeftChevron onClick={ previousImg } className='left' alt="précedent"/> }
      { activeCarousel && <RightChevron onClick={ nextImg } className='right' alt="suivant"/> }
    </section>
    
  )
}
