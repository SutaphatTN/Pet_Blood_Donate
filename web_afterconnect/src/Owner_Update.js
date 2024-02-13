import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic1 from './Picture/1.jpg';
import pic2 from './Picture/2.jpg';
import pic3 from './Picture/3.jpg';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Owner_dog_time from './Owner_dog_time';
import cat_dog from './Picture/cat_dog.jpeg';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import pic4 from './Picture/4.jpg';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Owner_Update() {

  //const [own_id, setID] = useState("");

  
   
    const [own_title, setTitle] = useState("");
    const [own_fname, setFirstname] = useState("");
    const [own_lname, setLastname] = useState("");
    const [own_idcard, setIdcard] = useState("");
    const [own_address, setAddress] = useState("");
    const [own_email, setEmail] = useState("");
    const [own_phone, setPhone] = useState("");
    

  const [own_id, setOwn_id] = useState("");
  
  const [hasToken, setHasToken] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  

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
          setFirstname(res.data[0].own_fname);
          setLastname(res.data[0].own_lname);
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
  

    
	
	
	function sendAddEvent(){
		axios.put('http://localhost/api/v4/update_owner_tt',
				{
					
                    'own_id':own_id,
					          'own_title':own_title,
                    'own_fname':own_fname,
                    'own_lname':own_lname,
                    'own_idcard':own_idcard,
                    'own_address':own_address,
                    'own_email':own_email,
                    'own_phone':own_phone,
                    
			
				}
			).then (
				res=> {	
					
					if (res.data.STATUS == "SUCCESSFULLY COMMENT") {
							alert("Successfully Added");
              setIsSuccess(false)
					}else {
							alert ("Successfully Added");
              setIsSuccess(false)
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
        <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className = "nav">
  
  
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link >
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">

      <ReactBootStrap.NavDropdown.Item > <Link to ="Owner_Profile">ข้อมูลเจ้าของสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">ข้อมูลสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pet_time">ข้อมูลการจองเวลาบริจาคเลือด</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        
        <ReactBootStrap.NavDropdown title="กรอกข้อมูลสัตว์เลี้ยง" id="collasible-nav-dropdown">
        
    <ReactBootStrap.NavDropdown.Item > <Link to ="Owner_Pet_dog">กรอกข้อมูลสุนัข</Link></ReactBootStrap.NavDropdown.Item>
 
    <ReactBootStrap.NavDropdown.Item ><Link to ="Owner_Pet_dog">กรอกข้อมูลเเมว</Link></ReactBootStrap.NavDropdown.Item>
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
            <Route path="/Owner_dog_time" component={Owner_dog_time} />
            <Route path="/Pet_infor" component={Pet_infor} />
            <Route path="/Pet_time" component={Pet_time} />
            <Route path="/Owner_Profile" component={Owner_Profile} />
            
            
            
          </Switch>
</div>
<br></br>
<br></br>
<div>
<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">เเก้ไขข้อมูลเจ้าของสัตว์เลี้ยง</Card.Header>
             <Card.Body>
             <img src={pic4} alt="cur" 
              height={200}
              width={170}
           />
             
           
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลส่วนตัว</Form.Label></Form.Row>
             <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                คำนำหน้า
            </Form.Label>
            <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                value = {own_title} onChange={(e)=>{setTitle(e.target.value)}}
                custom defaultValue="เลือก...">
                <option value=""></option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
            </Form.Control>
                
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ" value={own_fname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label  > นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="นามสกุล" value={own_lname} onChange={(e)=>{setLastname(e.target.value)}}/>
                </Form.Group>

               
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > รหัสบัตรประจำตัวประชาชน</Form.Label>
                <Form.Control type="text" placeholder="รหัสบัตรประจำตัวประชาชน" value={own_idcard} onChange={(e)=>{setIdcard(e.target.value)}} />
                <Form.Text id="passwordHelpInline" muted>
                รหัสบัตรประจำตัวประชาชน 13 หลัก
                  </Form.Text>
                </Form.Group>
                
            </Form.Row>
           
            
            
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เบอร์โทรศัพท์ที่สามารถติดต่อได้</Form.Label>
                <Form.Control type="text" placeholder="เบอร์โทรศัพท์" value={own_phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                (กรอกโดยไม่ต้องใส่ - หรือ เว้นวรรค เช่น 0900001111 )
                  </Form.Text>
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={own_email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
            
            </Form.Row>
        
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ที่อยุ่ปัจจุบัน</Form.Label>
                <Form.Text id="passwordHelpInline" muted>
                (เช่น หอพักในมหาวิทยาลัย ชื่อหอพัก 10 เลขที่ห้องพัก 1011)(หอพักภายนอก ชื่อหอพัก บ้านสาริตา เลขที่ห้องพัก 100
                เลขที่ 34/8 หมู่ 6 ซอยทุ่งรี อ.หาดใหญ์ จ.สงขลา )
                  </Form.Text>
                  <Form.Control as="textarea" rows={3} value={own_address} onChange={(e)=>{setAddress(e.target.value)}}/>                <br></br>

           

                <br></br>
      

      <Form.Check
        className = "kh2"
        type="checkbox"
        id="disabledFieldsetCheck"
        label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
    </Form.Group>
    <Button onClick={()=>sendAddEvent()}>Update</Button>
    {isSuccess && <Redirect to="/Home" /> }
    </Form>

</Card.Body>
</Card>
</div>


        </div>
        );

}

export default Owner_Update;