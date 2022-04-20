import React,{useState} from 'react'
import {Button , Row, Col,Spinner, Card} from 'react-bootstrap'
import axios from 'axios'


const Search = () => {
  const myData = JSON.parse(localStorage.getItem("searchData"))
  return (
    <>
    {myData&&  
       myData.map(ele=>{
        return <Col > 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ele.img} />
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          
          <Button variant="primary" onClick={""}>Download</Button>
        </Card.Body>
      </Card>
      </Col>
      })
     }
    </>
  )
}

export default Search