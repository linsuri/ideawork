import React from 'react'

const Content = (props) => {
  return (
    <div className="content">
      <img src={props.imgsrc} alt={props.title}/>
      <p>{props.date}</p>
      <h1>{props.title}</h1>
      <p>Presented by <a href="https://www.google.com">LOREM IPSUM</a></p>
      <hr/>
    </div>
  )
}

export default Content
