import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
//import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import admin from './Picture/admin.png';
//import Scholar_Student from './Scholar_Student';
import  Home from './Home';
import './Total.css';  
//import axios, { post } from 'axios';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import axios from 'axios';
//import Profile_Student from './Profile_Student';
import React, { useState, useEffect } from 'react';
 
function Regis_Admin() {

  const [admin_fname_error, setAdmin_fnameError] = useState("");
  const [admin_lname_error, setAdmin_lnameError] = useState("");
  const [admin_username_error, setAdmin_usernameError] = useState("");
  const [admin_password_error, setAdmin_passwordError] = useState("");

  const [admin_fname, setAdmin_fname] = useState("");
  const [admin_lname, setAdmin_lname] = useState("");
  const [admin_username, setAdmin_username] = useState("");
  const [admin_password, setAdmin_password] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isPass, setIsPass] = useState(false);

function sendSignup(){

  if (admin_fname == ""){
    setAdmin_fnameError(<h6 className = "kh5">·กรุณากรอกชื่อ</h6>)
  }else{
    setAdmin_fnameError(null)
  }
  if (admin_lname == ""){
    setAdmin_lnameError(<h6 className = "kh5">·กรุณากรอกนามสกุล</h6>)
  }else{
    setAdmin_lnameError(null)
  }
  if (admin_username == ""){
    setAdmin_usernameError(<h6 className = "kh5">·กรุณากรอก Username</h6>)
  }else{
    setAdmin_usernameError(null)
  }
  if (admin_password == ""){
    setAdmin_passwordError(<h6 className = "kh5">·กรุณากรอก Password</h6>)
  }else{
    setAdmin_passwordError(null)
  }

  {
    const url= 'http://localhost/api/v4/add_admin';
    const formData = new FormData();
    //formData.append('file',file)
    formData.append('admin_fname',admin_fname)
    formData.append('admin_lname',admin_lname)
    formData.append('admin_username',admin_username)
    formData.append('admin_password',admin_password)


    
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  return  axios.post(url, formData,config)
  .then (
    res=> {	
      
      if (res.data == "SUCCESSFULLY COMMENT") {
          alert("ลงทะเบียนสำเร็จ");
          setIsSuccess(true)
      }else {
          alert ("ลงทะเบียนไม่สำเร็จ");
          setIsSuccess(false)
      }
    }
  );

}
}
         

   
    

  return ( <div className="App">
  <div>
<img
className="d1"
src={pic}
alt="Second slide"
/>
</div>
<ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className = "nav">
  
  
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link >
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
        <Link >
        
    <ReactBootStrap.Nav.Link href = "http://hospital.vet.psu.ac.th">ข้อมูลโรงพยาบาล</ReactBootStrap.Nav.Link>
    </Link>
      <Link >
    <ReactBootStrap.Nav.Link ></ReactBootStrap.Nav.Link>
    </Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.NavDropdown title="Admin" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Regis_Admin">SignUp</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Admin_login">Login</Link></ReactBootStrap.NavDropdown.Item>

        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.Nav.Link >  &nbsp;&nbsp;&nbsp;&nbsp;
        </ReactBootStrap.Nav.Link>
    
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
            
            
           
           
            
          </Switch>
<br></br>
<br></br>
    <div>
        
    <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
       <Card.Header className = "kh1">กรอกข้อมูลผู้ดูเเลระบบ</Card.Header>
       <Card.Body>
         <img src={admin} alt="cur" 
             height={150}
             width={150}/>
             <br></br><br></br>
       <Form.Row className = "kh3"> <Form.Label  > ข้อมูล</Form.Label></Form.Row>
       <Form inline>
      
          
      </Form>
      <Form>
     
      
            
      
      <Form.Row className = "kh2">
          <Form.Group as={Col} >
          <Form.Label  > ชื่อ</Form.Label>
          <Form.Control type="text" placeholder="ชื่อ" value={admin_fname} onChange={(e)=>{setAdmin_fname(e.target.value)}}/>
          </Form.Group>

          <Form.Group as={Col} >
          <Form.Label  > นามสกุล</Form.Label>
          <Form.Control type="text" placeholder="นามสกุล" value={admin_lname} onChange={(e)=>{setAdmin_lname(e.target.value)}}/>

          </Form.Group>   
      </Form.Row>
  
      <Form.Row className = "kh2">
      < Form.Group as={Col} >
          <Form.Label  > Username</Form.Label>
        
          <Form.Control type="text" placeholder="username" value={admin_username} onChange={(e)=>{setAdmin_username(e.target.value)}} />
          
          </Form.Group>
      
      </Form.Row>
      <Form.Row className = "kh2">
      < Form.Group as={Col} >
          <Form.Label  > Password</Form.Label>
          <Form.Control type="password" placeholder="password" value={admin_password} onChange={(e)=>{setAdmin_password(e.target.value)}} />

          
          </Form.Group>
          </Form.Row>
          <br></br>
      { admin_fname_error && <p>{admin_fname_error}</p> }
      { admin_lname_error && <p>{admin_lname_error}</p> }
      { admin_username_error && <p>{admin_username_error}</p> }
      { admin_password_error && <p>{admin_password_error}</p> }

<Form.Check
  className = "kh2"
  type="checkbox"
  id="disabledFieldsetCheck"
  label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
/>

<Button onClick={()=>sendSignup()}>Submit</Button>
    {isSuccess && <Redirect to="/Home" /> }
      </Form>

      </Card.Body>
      </Card>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
          
          </div>
);

}

export default Regis_Admin;