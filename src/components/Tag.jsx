import React from 'react'

export default function Tag(props) {
  const tags = props.tags
  return (
  <section className='tags__container'>
    {tags.map((tag) => { return (<div className='tag'>{tag}</div>) }
    )}
    
  </section>
    
  )
}
