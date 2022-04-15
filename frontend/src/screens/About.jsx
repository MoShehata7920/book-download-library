import React from 'react'
import { Card } from 'react-bootstrap'
import Aboutimg from './images/Aboutimg.png'

const About = () => {
  return (
    <>
    <Card>
    <Card.Img src={Aboutimg} className="aboutimg" alt='' />
    </Card>
  <Card className="text-center">
<Card.Header>Edited BY 404 Team &#128526;&#128526; </Card.Header>
<Card.Body>
  <Card.Title>Book Shop </Card.Title>
  <Card.Text>
    In our website You can find all books which you need and it's easy to download all of them by one klick. Register with us and get many offers all the year.Harry up and get your new book .
  </Card.Text>
</Card.Body>
<Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  </>
  )
}

export default About