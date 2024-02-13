import emailjs from 'emailjs-com';
import React, { useRef, useState , useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Admin_add_dog from './Admin_add_dog';
import Admin_add_cat from './Admin_add_cat';
import Admin_add_status from './Admin_add_status';
import Admin_list_owner from './Admin_list_owner';
import Home from './Home';
import email from './Picture/email.png';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import './Total.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Profile_Student from './Profile_Student';
  import axios from 'axios';


function Email(){


    const {id} = useParams();
    const form = useRef();
    const [own_id, setOwn_id] = useState(""); 
    const [own_fname, setFirstname] = useState("");
	  const [own_lname, setLastname] = useState("");
    const [own_email, setEmail] = useState("");
    
    const [hnc, setHnc] = useState("");
    const [petc_name, setPetcname] = useState("");
    const [hasToken, setHasToken] = useState(true);	


    useEffect (()=>{
		
		
			axios.get('http://localhost/api/v4/list_cata_avt/'+id,
			).then (
				res=> {console.log("getting from...",res.data)
          
                setHnc(res.data[0].hnc);
                setPetcname(res.data[0].petc_name);
                setOwn_id(res.data[0].own_id);
                setFirstname(res.data[0].own_fname);
                setLastname(res.data[0].own_lname);
                setEmail(res.data[0].own_email);
                
                
        }).catch(err => console.log(err))	
		
		
	}, [id]);
    
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2tr9dji', 'template_edem69o', form.current, '38s03wa8oQ3S5XNwf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("ส่งอีเมลสำเร็จ")
    };
  
    return (
        <div>
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
    <Link>
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
  
    
        <ReactBootStrap.NavDropdown.Item > <Link to = "Admin_list_owner">ข้อมูลเจ้าของสัตว์เลี้ยง</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to = "Admin_add_dog">ข้อมูลสุนัข</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to = "Admin_add_cat">ข้อมูลเเมว</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link to = "Admin_add_status">ข้อมูลการจองวันบริจาค</Link></ReactBootStrap.NavDropdown.Item>

        </ReactBootStrap.NavDropdown>
       
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className = "name">
    ผู้ดูเเลระบบ
   </div>
    &nbsp;&nbsp;&nbsp;
    <Link to="/Home">
    <Button variant="outline-light">Signout</Button>{' '}
    </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
              
            <Route path="/Admin_list_owner" component={Admin_list_owner} />
            <Route path="/Admin_add_dog" component={Admin_add_dog} />
            <Route path="/Admin_add_cat" component={Admin_add_cat} />
            <Route path="/Admin_add_status" component={Admin_add_status} />
            <Route path="/Home" component={Home} />
          

            
          </Switch>
          <br></br>
          <br></br>
          <br></br>

        <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
      <Card.Header className = "kh1">Email บริจาคเลือดฉุกเฉิน</Card.Header>
      <Card.Body>
      <img src={email} alt="cur" 
          height={120}
          width={120}
        /><br></br>
      <form ref={form} onSubmit={sendEmail}>
      <Form.Row className = "kh2">
            
     
            < Form.Group as={Col} >
            <Form.Label  > ชื่อเเมว</Form.Label>
            <Form.Control readOnly id="disabledTextInput" value = {petc_name} name="cat_name" />
            
            </Form.Group>

            < Form.Group as={Col} >
            </Form.Group>
            < Form.Group as={Col} >
            </Form.Group>
        
            </Form.Row>
            <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > ชื่อ</Form.Label>
            <Form.Control readOnly type="text" value = {own_fname} name="user_fname"/>
            
            </Form.Group>

            < Form.Group as={Col} >
            <Form.Label  >สกุล</Form.Label>
            <Form.Control readOnly type="text"  value = {own_lname} name="user_lname"/>
            </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > Email</Form.Label>
            <Form.Control type="email" value = {own_email} name="user_email" />
           
            </Form.Group>

    
        </Form.Row>
        <br></br>
        <Button type="submit" value="Send" >Send</Button>

      </form>
      </Card.Body>
    </Card>
    </div>
        
    );
  };
export default Email;