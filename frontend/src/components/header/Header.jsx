import { Link } from 'react-router-dom'
import React, { useEffect  } from 'react';

import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

import { useNavigate } from "react-router-dom";

const Header = () => {
  const userInfo = localStorage.getItem("userInfo")

const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("userInfo")
    navigate("/")
  }
  useEffect(() => {
    console.log(userInfo)
if((!userInfo && window.location.href !="http://localhost:3000/login" && window.location.href !="http://localhost:3000/register" )){
navigate("/")}
  

}, [userInfo, navigate])
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand  as={Link} to='/' >404! Library</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Booksoftheyear">Books(2022)</Nav.Link>
      <Nav.Link as={Link} to="/Prices" >Pricing</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/Sciencebooks" >Science</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Programmingbooks">Programming</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Languagesbooks">Languages</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/Exclusive">Exclusive</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/About">
        ABOUT
      </Nav.Link>
    </Nav>
    <Form className='form-inline'>
    <Row>
    <Col xs={7}>
      <Form.Control  type='text' placeholder='Search' className='mr-sm-2' />
    </Col>
    <Col>
    <Button  variant='light'>Search</Button>
    </Col>
    <Col>
    <Button  variant='light' onClick={logout}>Logout</Button>
    </Col>
  </Row>  
    
  
  
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
  <br />
    </>
  )
}

export default Header