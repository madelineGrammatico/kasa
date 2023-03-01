

export function Banner({banner, text=""}) {
  console.log(text)
  return (
    <section className="banner">
        <div className="banner__shadow"></div>
        <img src={banner} className="banner__img" alt={banner.split("/").slice(-1)}/>
        { 
          (text.length !== 0) && (text.length >=1) ? 
            <h1>{text.map((item, index) => <span key={index}>{item}</span>)}</h1>
          : 
            <h1>{text}</h1 > 
        }
    </section>
  )
}
