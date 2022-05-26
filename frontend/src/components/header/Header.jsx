import { Link } from 'react-router-dom'
import React, { useEffect, useState  } from 'react';

import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

import { useNavigate } from "react-router-dom";
import axios from 'axios'





const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  let Authorization
  const config = {
    headers:{
     authorization:Authorization,
    },               
}
  if(userInfo){
      const token = userInfo.token
   Authorization = `Bearer ${token}`
 
  }

  const [dataloaded, setdataloaded] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [search, setsearch] = useState("");
  const navigate = useNavigate()

const searchP = async ()=>{
  console.log(search);
  await axios.get("http://localhost:5050/api/books/search/"+search,config).then((res)=>{
      if(res.data){
        localStorage.setItem("searchData",JSON.stringify(res.data) )
      }
  }).then((res)=>{
    navigate("/Search")
  })
}

  const logout = ()=>{
    localStorage.removeItem("userInfo")
    navigate("/")
  }
  useEffect(() => {
    console.log(userInfo)
if((!userInfo && window.location.href !="http://localhost:3001/login" && window.location.href !="http://localhost:3001/register" )){
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
    
    </Nav>
    <Form className='form-inline'>
    <Row>
    <Col xs={7}>
      <Form.Control  type='text' placeholder='Search' onChange={(ele)=>{
        setsearch(ele.target.value)
        console.log(search);
      }} className='mr-sm-2' />
    </Col>
    <Col>
    <Button  variant='light' onClick={searchP}>Search</Button>
    </Col>
   {userInfo&&  <Col>
    <Button  variant='light' onClick={logout}>Logout</Button>
    </Col>}
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