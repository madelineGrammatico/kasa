import { useHandleClick } from "../hooks/useHandleClick"
import { ReactComponent as DownChevron} from "../asset/chevron-down-solid.svg"
import { ReactComponent as UpChevron } from "../asset/chevron-up-solid.svg"

export  function Dropdown({title, children}) {
  const [ isOpen, handleClick] = useHandleClick()
  
    return (
      <article className="dropdown">
        <header className="dropdown__header" onClick={handleClick}>
          <h2>{title}</h2> 
          {isOpen? 
            <UpChevron className="up" alt="cacher infos"/>
          :
            <DownChevron className="down" alt="ouvrir infos"/>
          }
        </header>
        { isOpen? <>{ children }</> : null }
      </article>
    )

  }
