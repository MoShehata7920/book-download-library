import React from 'react'
import {Button , Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


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
      <div>
      Books
      </div></div>
  )
}

export default Books