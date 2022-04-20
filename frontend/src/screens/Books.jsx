import React, {useState, useEffect} from 'react'
import {Button , Row, Col,Spinner, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { saveAs } from "file-saver";





const Books = () => {



  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const isAdmin = userInfo.isAdmin
  const token = userInfo.token
  const [Loading, setLoading] = useState(false);
  const [dataloaded, setdataloaded] = useState(false);
  const [data, setdata] = useState("");
  const [error, seterror] = useState(false);
    const Authorization = `Bearer ${token}`
    const config = {
      headers:{
       authorization:Authorization,
      },               
  }

  
 
  const getBooks = async ()=>{
    await axios.get("http://localhost:5050/api/books/",config).then((res)=>{
        if(res.data){
          localStorage.setItem("data",JSON.stringify(res.data) )
        }
        
      
      setdataloaded(true)
     
      seterror(false)
      setLoading(false)
      
    }).catch((err)=>{
      setLoading(false)
      seterror(true)
    })
    console.log(data);
    return data
  }

  useEffect(() => {
    getBooks()
  }, []);

 const myData = JSON.parse(localStorage.getItem("data"))
 console.log(myData);
 
  return (
   
    <div>
        <Row className="py-3">
   
   <Col>
   {Loading && <Spinner animation="grow" />}
   </Col>
 </Row>
       <Row>
         <Col></Col>
         {isAdmin &&  <Col><Button as={Link} to='/Addbook'> AddBook</Button></Col>}
      <Col> </Col>
      </Row>
      <Row>
      {dataloaded&&  
       myData.map(ele=>{
        return <Col > 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ele.img} />
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          
          <Button variant="primary" onClick={
           async()=>{
            console.log(ele);
              axios.get(`http://localhost:5050/api/books/download/${ele['_id']}`,{responseType: 'blob',}).then(res=>{
                console.log(res);
               saveAs(res.data, "file.pdf")
         
              }
              )
           
           }
          }>Download</Button>
        </Card.Body>
      </Card>
      </Col>
      })
     }
      </Row>
     
      </div>
      
  )
}

export default Books