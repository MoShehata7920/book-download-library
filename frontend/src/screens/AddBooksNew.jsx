import {Button , Form, Col, Row, Spinner} from 'react-bootstrap'
import { useNavigate   }  from 'react-router-dom' ;
import React, {  useEffect, useState  } from 'react';
import DropBoxChooser from 'react-dropbox-chooser'
import Axios from 'axios';
import { FormControl } from 'react-bootstrap';
window.Buffer = window.Buffer || require("buffer").Buffer;




const AddBooksNew = () => {
    const [name, setName] = useState();
    const [file, setFile] = useState();
    const [title, settitle] = useState("");
   const [cat, setcat] = useState("");
   const [image, setimage] = useState("");
   const [Loading, setLoading] = useState(false);
   const [error, seterror] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const isAdmin = userInfo.isAdmin
    const userId = userInfo._id
    const token = userInfo.token
    const Authorization = `Bearer ${token}`
const navigate = useNavigate()
       
useEffect(() => {
if(!isAdmin){
navigate(-1)}

}, [userInfo, navigate])
const send = event => {
    const data = new FormData();
    // data.append("name", name);
    data.append("neww", file);

    Axios.post("http://localhost:5050/api/books/upload", data,{
        headers: {
            'content-type': 'multipart/form-data'
        }
    } )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".pdf"
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
  
}

export default AddBooksNew




