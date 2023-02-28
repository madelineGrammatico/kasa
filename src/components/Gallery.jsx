import 
{ Link,
  useLoaderData } from "react-router-dom"

export default function Gallery() {
  const data = useLoaderData()
  
  return (
    <section className="gallery">
        {data.map((rental) => (
            
            <article key={rental.id} className="gallery__article">
              <Link to={`/rental/:${rental.id}`}>
                <img src={rental.cover} className="gallery__picture" alt={rental.title}/>
                 <div className="gallery__picture__shadow"></div>
                 <p>{rental.title}</p>
              </Link> 
            </article>
        ))}
    </section>
  )
}
