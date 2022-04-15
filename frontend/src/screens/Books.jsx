import React from 'react'
import {Button , Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CardGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import M1 from './images/M1.jpg'
import M2 from './images/M2.jpg'
import M3 from './images/M3.jpg'
import M4 from './images/M4.jpg'
import M5 from './images/M5.jpg'
import M6 from './images/M6.jpg'
import s1 from './images/s1.jpg'
import { Nav } from 'react-bootstrap'

const Books = () => {

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const isAdmin = userInfo.isAdmin
  return (
   
    <div>
       <Row>
         <Col></Col>
         {isAdmin &&  <Col><Button as={Link} to='/Addbook'> AddBook</Button></Col>}
      <Col></Col>
      </Row>
      <Card>
      <Card.Img src={s1} className="top" alt='' />
      </Card>
    <Card className="text-center"></Card>

      <Row xs={4} md={1} className="g-4">
        <Nav as={Link} to='Languagesbooks' >'   ' See More </Nav>
      <CardGroup>
  <Card as={Link} to="/Thebook" >
    <img src={M1} className="m1" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M2} className="m2" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M3} className="m3" alt='1' />
    <Card.Footer>
      <small className="text-muted">Menchen a2.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M4} className="m4" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A2.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M5} className="m5" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M6} className="m6" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.2</small>
    </Card.Footer>
  </Card>
  </CardGroup>

  <Nav as={Link} to='Sciencebooks' >'   ' See More </Nav>
  <CardGroup>
  <Card as={Link} to="/Thebook" >
    <img src={M1} className="m1" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M2} className="m2" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M3} className="m3" alt='1' />
    <Card.Footer>
      <small className="text-muted">Menchen a2.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M4} className="m4" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A2.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M5} className="m5" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M6} className="m6" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.2</small>
    </Card.Footer>
  </Card>
  </CardGroup>

  <Nav as={Link} to='Programmingbooks' >'   ' See More </Nav>
  <CardGroup>
  <Card as={Link} to="/Thebook" >
    <img src={M1} className="m1" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M2} className="m2" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A1.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M3} className="m3" alt='1' />
    <Card.Footer>
      <small className="text-muted">Menchen a2.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M4} className="m4" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen A2.2</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M5} className="m5" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.1</small>
    </Card.Footer>
  </Card>
  <Card as={Link} to="/Thebook" >
    <img src={M6} className="m6" alt='' />
    <Card.Footer>
      <small className="text-muted">Menchen b1.2</small>
    </Card.Footer>
  </Card>
  </CardGroup>


</Row>
      <div>
      Books
      </div></div>
  )
}

export default Books