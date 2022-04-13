import React, {useEffect} from 'react'
import {Card,Nav, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";





const Lnading = () => {

  const userInfo = localStorage.getItem("userInfo")
  const navigate = useNavigate()

  

  useEffect(() => {
    if(userInfo){
     navigate("/Books")}
     
    
}, [userInfo, navigate])


 
  return (
    <div><Card>
    <Card.Header>
    <Nav justify variant="tabs" defaultActiveKey="/home" >
  
  <Nav.Item>
    <Nav.Link eventKey="link-1">Welcom in 404! Book Shop</Nav.Link>
  </Nav.Item>
  
</Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <div className="d-grid gap-2">
  <Button variant="light" size="lg" href='/login'>
Login  </Button>
  <Button variant="light" size="lg" href='/register'>
Register  </Button>
</div>
    </Card.Body>
  </Card></div>
  )
}

export default Lnading