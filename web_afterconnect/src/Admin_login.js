import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
//import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
//import Scholar_Student from './Scholar_Student';
import  Home_Admin from './Home_Admin';
import admin from './Picture/admin.png';
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
 
function Admin_login() {

 

 
  const [admin_username, setAdmin_username] = useState("");
  const [admin_password, setAdmin_password] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [isLoggedInToMember, setIsLoggedInToMember] = useState(false);

  
	useEffect (()=>{
		
		if (sessionStorage.getItem('admin_api_token')!=null) {
			
		}
	
	}, []);
	

function sendSignup(){

  

  
    axios.post('http://localhost/api/v4/login_admin',
    {
        "admin_username" : admin_username,
        "admin_password" : admin_password,

    }
).then (
    res=> {				
        if (res.data.status=="Success"){
            //SessionStorage เป็นคำสั่งมาตารฐานของ Javascript สำหรับการเก็บข้อมูลใดๆที่ใช้ชั่วคราว กรณีนี้เราใช้ Session Storage เก็บ api_token					

                setIsLoggedInToMember(true);
                sessionStorage.setItem('admin_api_token', res.data.token);
        
            
        }else {
            alert ("ล็อคอินไม่สำเร็จ");
        }
    }
);	
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
    <Card  className="c1" style={{ width: '30rem', marginLeft: '40vw', marginTop: 'vh ' }}>
  <Card.Body>
  <img className="p1 "src={admin}  class="center"
             height={150}
             width={150}/>
             <br></br><br></br>
    <Card.Title className = "kh2">LoginAdmin</Card.Title>
    <Form className = "kh2">
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" value={admin_username} onChange={(e)=>{setAdmin_username(e.target.value)}}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={admin_password} onChange={(e)=>{setAdmin_password(e.target.value)}}/>
  </Form.Group>

  <Button onClick={()=>sendSignup()}>Signup</Button>
    {isLoggedInToMember && <Redirect to="/Home_Admin" /> }
  <Card.Body>
  
  
  </Card.Body>
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

export default Admin_login;