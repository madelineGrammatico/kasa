import { useState } from "react"
import { ReactComponent as DownChevron} from "../asset/chevron-down-solid.svg"
import { ReactComponent as UpChevron } from "../asset/chevron-up-solid.svg"

export default function Dropdown(props) {
  const isOpenState = useState(false)
  const isOpen= isOpenState[0]
  const setIsOpen = isOpenState[1]
  // const { isOpen, setIsOpen } = useState(false)

  return isOpen?(
    <article className="dropdown">
        <header className="dropdown__header" onClick={() => setIsOpen(false)}>
            <h2>{props.title}</h2> <UpChevron className="up" alt="caché infos"/>
        </header>
          { typeof(props.body)==="object"? (
            <ul className="dropdown__body">
              { props.body.map((item, index) => <li key={index} className="dropdown__body__item">{item}</li>) }
            </ul>
            ) : (
            <p className="dropdown__body" >{props.body}</p>) }
    </article>
  ) : (
    <article className="dropdown">
        <header className="dropdown__header" onClick={() => setIsOpen(true)}>
            <h2>{props.title}</h2> <DownChevron className="down" alt="ouvrir infos"/>
        </header>
    </article>
  )
}
