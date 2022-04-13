import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import {Form, Button , Row, Col, Spinner, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './loginAndRegister.css'
import Error from '../components/Error/Error'
import { useNavigate } from "react-router-dom";



const Login = () =>{
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
   const [Loading, setLoading] = useState(false);
   const [error, seterror] = useState(false);
   const userInfo = localStorage.getItem("userInfo")


       


   const submitHandler = async (event) =>{
    event.preventDefault();
       event.stopPropagation()
       
           const config = {
               headers:{
                   "Content-type": "application/json"
               }
           }
           setLoading(true)
           
            await axios.post("http://localhost:5050/api/users/login",
            {email, password},config).then((res) =>{
                seterror(false)
             localStorage.setItem('userInfo', JSON.stringify(res.data))
             setLoading(false)
            }).catch((err) =>{
                setLoading(false)
                 seterror(true)
            })  
   }

   const navigate = useNavigate()
         
         useEffect(() => {
     if(userInfo){
      navigate("/Books")}
      
     
 }, [userInfo, navigate])


        return (
            <div className='loginContainer'>

                <div>
                    {error && <Alert variant="danger" onClose={() => seterror(false)} dismissible>
        <Alert.Heading>INVALID EMAIL OR PASSWORD</Alert.Heading>
        
      </Alert>}
                </div>
               
                <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className='form' value={email} onChange={(ele) =>{
        setemail(ele.target.value)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} className='form' onChange={
        (ele) =>{
            setpassword(ele.target.value)
        }
    }/>
  </Form.Group>
  <Button variant="primary" type="submit"> 
    Submit
  </Button>
</Form>
<Row className="py-3">
   
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
        <Row className="py-3">
   
          <Col>
          {Loading && <Spinner animation="grow" />}
          </Col>
        </Row>
            </div>
        );
}

export default Login;



