import { useState } from "react"

export function useHandleClick() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => { isOpen ? setIsOpen(false): setIsOpen(true) }
    return [ isOpen, handleClick]
  }