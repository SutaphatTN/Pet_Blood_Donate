import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic1 from './Picture/1.jpg';
import pic2 from './Picture/2.jpg';
import pic3 from './Picture/3.jpg';
import pic4 from './Picture/4.jpg';
import Home_Owner from './Home_Owner';
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_dog_time from './Owner_dog_time';
import Home from './Home';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Owner_Profile() {


  const [own_id, setOwn_id] = useState(""); 

  const [own_title, setTitle] = useState("");
  const [own_fname, setFirstname] = useState("");
  const [own_lname, setLastname] = useState("");
  const [own_idcard, setIdcard] = useState("");
  const [own_address, setAddress] = useState("");
  const [own_email, setEmail] = useState("");
  const [own_phone, setPhone] = useState("");
  const [hasToken, setHasToken] = useState(true);

  function logout() {
		//ระบบ Logout ในระบบ Stateless Authentication นั้น ไม่จำเป็นต้องยิง REST API
		//เพียงเคลียร์ token ออกจาก Memory แล้ว redirect กลับหน้า Login เป็นอันเพียงพอ
		
		sessionStorage.clear();
		setHasToken(false);
		alert("Logged Out");
	}
	useEffect (()=>{
		
		
		if (sessionStorage.getItem('user_api_token')==null) {
			setHasToken(false);
		}else {
			axios.get('http://localhost/api/v4/profile?api_token='+sessionStorage.getItem('user_api_token'),
			).then (
				res=> {	

          setOwn_id(res.data[0].own_id);
					
          setTitle(res.data[0].own_title);
          setFirstname(res.data[0].own_fname);
          setLastname(res.data[0].own_lname);
          setIdcard(res.data[0].own_idcard);
          setAddress(res.data[0].own_address);
          setEmail(res.data[0].own_email);
          setPhone(res.data[0].own_phone);
          
          
          
				}
			);
			
			
		
		}
	}, []);
  function UserUpdate(own_id){
  
    window.location = '/Owner_Update'
   
   }
  
	return ( <div className="App">
    <div>
    <img
      className="d1"
      src={pic}
      alt="Second slide"
    />
    </div>
        <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className = "nav">
  
  
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to = "/Home_Owner">
    <ReactBootStrap.Nav.Link href = "/Home_Owner">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">

      <ReactBootStrap.NavDropdown.Item > <Link to ="Owner_Profile">ข้อมูลเจ้าของสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">ข้อมูลสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pet_time">ข้อมูลการจองเวลาบริจาคเลือด</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        
        <ReactBootStrap.NavDropdown title="กรอกข้อมูลสัตว์เลี้ยง" id="collasible-nav-dropdown">
        
    <ReactBootStrap.NavDropdown.Item > <Link to ="Owner_Pet_dog">กรอกข้อมูลสุนัข</Link></ReactBootStrap.NavDropdown.Item>
 
    <ReactBootStrap.NavDropdown.Item ><Link to ="Owner_Pet_cat">กรอกข้อมูลเเมว</Link></ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
      <Link to="/Owner_dog_time">
    <ReactBootStrap.Nav.Link href="#deets">ระบุเวลาบริจาคเลือด</ReactBootStrap.Nav.Link>
    </Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav>
    {!hasToken && <Redirect to="" /> }
    <div className = "name"> {own_id} {own_fname} {own_lname} 
   </div>
    &nbsp;&nbsp;&nbsp;
    <Link to="/Home">
    <Button variant="outline-light">Signout</Button>{' '}
    </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
            <Route path="/Owner_Pet_cat" component={Owner_Pet_cat} />
            <Route path="/Owner_Pet_dog" component={Owner_Pet_dog} />
            <Route path="/Pet_infor" component={Pet_infor} />
            <Route path="/Pet_time" component={Pet_time} />
            <Route path="/Owner_dog_time" component={Owner_dog_time} />
            <Route path="/Home" component={Home} />
            <Route path="/Home_Owner" component={Home_Owner} />
            
          </Switch>
</div>
<br></br>
<br></br>
<div>
<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลเจ้าของสัตว์เลี้ยง</Card.Header>
             <Card.Body>
      <img src={pic4} alt="cur" 
          height={200}
          width={170}
        />
    {!hasToken && <Redirect to="/" /> }
<br></br>
<br></br>
<Form.Row className = "kh3"> <Form.Label  > ข้อมูลส่วนตัว</Form.Label></Form.Row>
             <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                คำนำหน้า
            </Form.Label>
            <Form.Control  disabled readOnly value = {own_title} onChange={(e)=>{setTitle(e.target.value)}}>
            </Form.Control>
                
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control  disabled readOnly type="text" placeholder="ชื่อ" value={own_fname} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label  > นามสกุล</Form.Label>
                <Form.Control  disabled readOnly type="text" placeholder="นามสกุล" value={own_lname} onChange={(e)=>{setLastname(e.target.value)}}/>
                </Form.Group>

               
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > รหัสบัตรประจำตัวประชาชน</Form.Label>
                <Form.Control disabled readOnly type="text" placeholder="รหัสบัตรประจำตัวประชาชน" value={own_idcard} onChange={(e)=>{setIdcard(e.target.value)}} />
                
                </Form.Group>
                
            </Form.Row>
           
            
            
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เบอร์โทรศัพท์ที่สามารถติดต่อได้</Form.Label>
                <Form.Control disabled readOnly type="text" placeholder="เบอร์โทรศัพท์" value={own_phone} onChange={(e)=>{setPhone(e.target.value)}}/>
               
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Email</Form.Label>
                <Form.Control disabled readOnly type="email" placeholder="Email" value={own_email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
            
            </Form.Row>
        
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ที่อยุ่ปัจจุบัน</Form.Label>
                
                  <Form.Control disabled readOnly as="textarea" rows={3} value={own_address} onChange={(e)=>{setAddress(e.target.value)}}/>  
                  </Form.Group>              <br></br>

                  <Button variant="info" onClick={()=>UserUpdate(own_id)}>Change Information</Button>
                </Form>
    
 
	</Card.Body>
            </Card>
            <br></br>  <br></br>  <br></br>
            

	
            </div>

        </div>
        );

}

export default Owner_Profile;