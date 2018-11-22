import React from 'react'
import Content from './Content'
import ContentInfo from './ContentInfo'

const ContentContainer = () => {

  const reorder = (arr, columns) => {
    const newContentArr = []
    let currentColumn = 0

    while (currentColumn < columns) {
      for (let i = 0; i < arr.length; i += columns) {
        if (arr[i + currentColumn]) {
          newContentArr.push(arr[i + currentColumn])
        }
      }
      currentColumn++
    }

    return newContentArr
  }

  return (
    <div className="content-container">
      {reorder(ContentInfo, 3).map(content => <Content key={content.id} imgsrc={content.imgsrc} date={content.date} title={content.title} url={content.url} />)}
    </div>
  )

}

export default ContentContainer
