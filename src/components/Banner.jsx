

export function Banner(props) {
  const {banner, text} = props
  return (
    <section className="banner">
        <div className="banner__shadow"></div>
        <img src={banner} className="banner__img" alt="falaise"/>
        { text && <h1>{text}</h1 >}
    </section>
  )
}
