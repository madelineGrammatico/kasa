import { Link } from "react-router-dom"

export function Card(rental) {
  return (
    <article key={rental.id} className="gallery__article">
              <Link to={`rental/:${rental.id}`}>
                <img src={rental.pictures[0]} className="gallery__picture" alt={rental.title}/>
                 <div className="gallery__picture__shadow">{rental.id}</div>
                 <p>{rental.title}</p>
              </Link> 
            </article>
  )
}
