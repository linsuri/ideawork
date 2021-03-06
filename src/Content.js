import React from 'react'

const Content = (props) => {
  return (
    <div className="content">
      <a href={props.url}><img src={props.imgsrc} alt={props.title}/></a>
      <p className="content-date">{props.date}</p>
      <a href={props.url}><h1 className="content-title">{props.title}</h1></a>
      <p className="content-present">Presented by <a href="https://www.google.com">LOREM IPSUM</a></p>
      <hr/>
    </div>
  )
}

export default Content
