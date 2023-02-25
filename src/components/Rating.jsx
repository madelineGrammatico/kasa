import React from 'react'

import { ReactComponent as Star} from '../asset/star-solid.svg'



export default function Rating(props) {
  const rating = props.rating
  const range = [1, 2, 3, 4, 5]

  return (
    <section className='rating'>
      {range.map((number) => 
        rating >= number ? <Star className="star"alt="star"/> : <Star className="starEmpty"/>
      )}
    </section>
  )
}
