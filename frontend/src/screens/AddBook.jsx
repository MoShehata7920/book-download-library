import {Button , Form, Col, Row, Spinner,Alert} from 'react-bootstrap'
import { useNavigate   }  from 'react-router-dom' ;
import React, {  useEffect, useState  } from 'react';
import DropBoxChooser from 'react-dropbox-chooser'
import axios from 'axios';
import { FormControl } from 'react-bootstrap';
window.Buffer = window.Buffer || require("buffer").Buffer;




const AddBook = () => {
    const [title, settitle] = useState("");
   const [cat, setcat] = useState("");
   const [file, setfile] = useState("");
   const [image, setimage] = useState("");
   const [Loading, setLoading] = useState(false);
   const [error, seterror] = useState(false);
   const [filepath, setfilepath] = useState("");

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const isAdmin = userInfo.isAdmin
    const token = userInfo.token
    const Authorization = `Bearer ${token}`
const navigate = useNavigate()
       
useEffect(() => {
if(!isAdmin){
navigate(-1)}


}, [userInfo, navigate])

const formData = new FormData();
const submitHandler = async (event) =>{

    event.preventDefault();
       event.stopPropagation()
       console.log(Authorization);
           const config = {
               headers:{
                authorization:Authorization,
               },               
           }
           setLoading(true)
           if(filepath){
           await axios.post("http://localhost:5050/api/books/addBook",
            { title, category:cat,data:filepath, user: userInfo},config).then((res) =>{
              setLoading(false)
                seterror(false)
                console.log(res);
             setLoading(false)
            }).catch((err) =>{
                setLoading(false)
                 seterror(true)

            })  }else{
              setLoading(false)
              seterror("please upload the file first")
            }

        
   }
  return (
   
    <div>
                  <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasictitle" >
    <Form.Label>Title</Form.Label>
    <Form.Control type="title" placeholder="Enter title" className='form' value={title} onChange={(ele) =>{
        settitle(ele.target.value)
    }} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasiccat">
    <Form.Label>Category</Form.Label>
    <Form.Select aria-label="Default select example" onChange={
        (ele) =>{
            setcat(ele.target.value)
        }}>
  <option value="other">Select</option>
  <option value="Progrannig">Progrannig</option>
  <option value="Biology">Biology</option>
  <option value="Science">Science</option>
  <option value="Science">Science</option>
</Form.Select>
  </Form.Group>
  
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Book Cover Image</Form.Label>
    <Form.Control type="file" name='file' accept='.pdf' onChange={(e) =>{
      setfile(e.target.files[0])
      const data = new FormData()
      data.append('data',e.target.files[0]) 
      axios.post("http://localhost:5050/api/books/upload",data).then((res)=>{
        setfilepath(res.data)
        console.log(filepath);
      }).catch((err)=>{
        seterror("can't upload the file")
      })

    }}/>
  </Form.Group>
 
  <Button variant="primary" type="submit"> 
    Submit
  </Button>
</Form>

<Row className="py-3">
   
   <Col>
   {Loading && <Spinner animation="grow" />}
   </Col>
   
 </Row>
 <Row>
 <Col>{error && <Alert variant="danger" onClose={() => seterror(false)} dismissible>
        <Alert.Heading>{error}</Alert.Heading>
        
      </Alert>}</Col>
 </Row>
 
</div>
  )
}

export default AddBook