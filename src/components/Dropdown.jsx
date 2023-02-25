import { useState } from "react"
import down from "../asset/chevron-down-solid.svg"
import up from "../asset/chevron-up-solid.svg"

export default function Dropdown(props) {
  const isOpenState = useState(false)
  const isOpen= isOpenState[0]
  const setIsOpen = isOpenState[1]
  // const { isOpen, setIsOpen } = useState(false)

  return isOpen?(
    <article className="dropdown">
        <header className="dropdown__header" onClick={() => setIsOpen(false)}>
            <h2>{props.title}</h2> <img src={up} className="up" alt="caché infos"></img>
        </header>
        <ul className="dropdown__body">
            { typeof(props.body)==="object"? (
              props.body.map((item, index) => <li key={index} className="dropdown__body__item">{item}</li>)
              ) : (
              <p className="dropdown__body__item" >{props.body}</p>) }
        </ul>
    </article>
  ) : (
    <article className="dropdown">
        <header className="dropdown__header" onClick={() => setIsOpen(true)}>
            <h2>{props.title}</h2> <img src={down} className="down" alt="ouvrir infos"></img>
        </header>
    </article>
  )
}
