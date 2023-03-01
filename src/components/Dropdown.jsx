import { useState } from "react"
import { ReactComponent as DownChevron} from "../asset/chevron-down-solid.svg"
import { ReactComponent as UpChevron } from "../asset/chevron-up-solid.svg"

export function UseHandleClick() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => { isOpen ? setIsOpen(false): setIsOpen(true) }
  return [ isOpen, handleClick]
}

export default function Dropdown({title, children}) {
  const [ isOpen, handleClick] = UseHandleClick()
  
  function HeaderDropdow() {
    return (
      <header className="dropdown__header" onClick={handleClick}>
        <h2>{title}</h2> 
        {isOpen? 
          <UpChevron className="up" alt="cacher infos"/>
        :
          <DownChevron className="down" alt="ouvrir infos"/>
        }
      </header>
    )

  }

  function BodyDropdow() {
    const body = typeof(children)==="object"? (

        <ul className="dropdown__body" key={`bodyOf${title}`}>
          { children.map((item, index) => <li key={index} className="dropdown__body__item">{item}</li>) }
        </ul>
        
      ) : (

        <p className="dropdown__body" key={`bodyOf${title}`}>{children}</p>
      
      );

    return (
      <>{ body }</>
    )
  }

  return (
    <>
      { isOpen?(
        <article className="dropdown">
          <HeaderDropdow/>
          <BodyDropdow/>
        </article>
      ) : (
        <article className="dropdown">
          <HeaderDropdow/>
        </article>
      )}
    </>
  )
  
  
}
