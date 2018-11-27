import React from 'react'
import Content from './Content'
import ContentInfo from './ContentInfo'

class ContentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  reorder = (arr, columns) => {
    // sort by date
    arr = arr.sort((a, b) => new Date(b.date) - new Date(a.date))

    // reorder to get the masonry grid
    const newContentArr = []
    let currentColumn = 0

    while (currentColumn < columns) {
      for (let i = 0; i < arr.length; i += columns) {
        if (!!arr[i + currentColumn]) {
          newContentArr.push(arr[i + currentColumn])
        }
      }
      currentColumn++
    }

    return newContentArr
  }

  render() {
    // if the screen is small, masonry grid has 2 columns
    // if the screen is large, masonry grid has 3 columns
    let columns = (this.state.width > 812) || (768 < this.state.width && this.state.width < 1024 && this.state.width < this.state.height) ? 3 : 2

    return (
      <div className="content-container">
        {this.reorder(ContentInfo, columns).map(content => <Content key={content.id} imgsrc={content.imgsrc} date={content.date} title={content.title} url={content.url} />)}
        <p className="readmore"><a href="https://www.google.com">READ MORE</a></p>
      </div>
    )
  }

}

export default ContentContainer
