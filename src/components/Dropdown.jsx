
export default function Dropdown(title, body) {
  return (
    <article>
        <header className="dropdown__header">
            <h2>{title}</h2> <i></i>
        </header>
        <div className="dropdown__body">
            <p>{body}</p>
        </div>
    </article>
  )
}
