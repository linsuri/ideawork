import React from 'react'
import Content from './Content'
import ContentInfo from './ContentInfo'
import { Grid, Segment } from 'semantic-ui-react'

const ContentContainer = () => {

  const ContentArr = ContentInfo.map(content => <Content key={content.id} imgsrc={content.imgsrc} date={content.date} title={content.title} url={content.url} />)

  return (
    <div className="content-container">
      {ContentArr}
      {/* <Grid>
        <Grid.Row columns={2} only='mobile tablet'>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>4</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>5</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>6</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row columns={3} only='computer'>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>4</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>5</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>6</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  )
}

export default ContentContainer
