import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  as={Link} to='/' >404! Library</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link as={Link} to="/Prices" >Pricing</Nav.Link>
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/Sciencebooks" >Science</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Programmingbooks">Programming</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/Languagesbooks">Languages</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
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