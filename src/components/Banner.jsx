import banner from "../asset/banner_Home.png"

export function Banner() {
  return (
    <section className="banner">
        <div className="banner__shadow"></div>
        <img src={banner} className="banner__img" alt="falaise"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}
