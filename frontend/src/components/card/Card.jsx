import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

const Cardd = async (props) => {
const data = localStorage.getItem("data")


const display = (props)=>{
data.map(ele=>{
return <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
})
console.log(data);
}
  return (
   <div>hello</div>
  )
}
 export default Cardd