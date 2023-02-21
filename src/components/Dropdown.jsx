
export default function Dropdown(props) {
    console.log(props)
  return (
    <article>
        <header className="dropdown__header">
            <h2>{props.title}</h2> <i></i>
        </header>
        <div className="dropdown__body">
            <p>{props.body}</p>
        </div>
    </article>
  )
}
