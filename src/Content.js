import React from 'react'

const Content = (props) => {
  return (
    <div className="content">
      <a href={props.url}><img src={props.imgsrc} alt={props.title}/></a>
      <p className="date">{props.date}</p>
      <a href={props.url}><h1 className="title">{props.title}</h1></a>
      <p className="present">Presented by <a href="https://www.google.com">LOREM IPSUM</a></p>
      <hr/>
    </div>
  )
}

export default Content
