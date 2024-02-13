import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Row from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Home_Owner from './Home_Owner';
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_dog_time from './Owner_dog_time';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import Home from './Home';
import cat from './Picture/cat.png';

import './Total.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import axios from 'axios';
  import React, { useState, useEffect } from 'react';
 
function Owner_Pet_cat(){

 /* const [pet_name_error, setPetnameError] = useState("");
  const [pet_sex_error, setPetsexError] = useState("");*/

  
  const [own_id, setOwn_id] = useState("");
  const [own_fname, setFirstname] = useState("");
	const [own_lname, setLastname] = useState("");

  const [petc_name, setPetname] = useState("");
  const [petc_birthday, setPetbirthday] = useState("");
  const [petc_sex, setPetsex] = useState("");
  const [petc_weight, setPetweigt] = useState("");
  const [petc_vaccine, setPetvaccine] = useState("");
  const [petc_emerg, setPetemerg] = useState("");
  


  const [isSuccess, setIsSuccess] = useState(false);
  const [hasToken, setHasToken] = useState(true);	

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
          
          
				}
			);
			
			
		
		}
	}, []);

	function logout() {
		//ระบบ Logout ในระบบ Stateless Authentication นั้น ไม่จำเป็นต้องยิง REST API
		//เพียงเคลียร์ token ออกจาก Memory แล้ว redirect กลับหน้า Login เป็นอันเพียงพอ
		
		sessionStorage.clear();
		setHasToken(false);
		alert("Logged Out");
	}
  function sendSubmit(){
    {
      const url = 'http://localhost/api/v4/add_cattt';
      const formData = new FormData();

      formData.append('own_id',own_id)
      formData.append('petc_name',petc_name)
      formData.append('petc_birthday',petc_birthday)
      formData.append('petc_sex',petc_sex)
      formData.append('petc_vaccine',petc_vaccine)
      formData.append('petc_weight',petc_weight)
      formData.append('petc_emerg',petc_emerg)
      
      
    


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
            <Route path="/Owner_dog_time" component={Owner_dog_time} />
            <Route path="/Owner_Pet_dog" component={Owner_Pet_dog} />
            <Route path="/Pet_infor" component={Pet_infor} />
            <Route path="/Pet_time" component={Pet_time} />
            <Route path="/Owner_Profile" component={Owner_Profile} />
            <Route path="/Home" component={Home} />
            <Route path="/Home_Owner" component={Home_Owner} />
            
          </Switch>
<br></br>
<br></br>
          <div>
              
          <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">กรอกข้อมูลสัตว์เลี้ยงประเภทเเมว</Card.Header>
             <Card.Body>
             <img src={cat} alt="cur" 
              height={120}
             width={120}
             />
            
            <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                เพศสัตว์เลี้ยง
            </Form.Label>
            <Form.Control
                as="select"
                /*className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"*/
                value = {petc_sex} onChange={(e)=>{setPetsex(e.target.value)}}
                custom  defaultValue="เลือก...">
                <option value=""></option>
                <option value="เพศผู้">เพศผู้</option>
                <option value="เพศเมีย">เพศเมีย</option>
                
            
            </Form.Control>
            <br></br>  
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ" value={petc_name} onChange={(e)=>{setPetname(e.target.value)}}/>
                </Form.Group> 
            </Form.Row>
           
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > วัน/เดือน/ปีเกิด</Form.Label>
                <Form.Control type="date" placeholder="วัน/เดือน/ปี" 	value={petc_birthday} 	onChange={(e)=>{setPetbirthday(e.target.value)}} />
                <Form.Text id="passwordHelpInline" muted>
                  ตัวอย่าง 7 มกราคม 2020
                  </Form.Text>
                </Form.Group>
                < Form.Group as={Col} >
                <Form.Label  > น้ำหนัก(กิโลกรัม)</Form.Label>
                <Form.Control type="text" placeholder="น้ำหนัก" value={petc_weight} onChange={(e)=>{setPetweigt(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                กรอกเเค่ตัวเลข
                  </Form.Text>
                </Form.Group>
            </Form.Row>
           
            
            
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ประวัติวัคซีน</Form.Label>
                <Form.Text id="passwordHelpInline" muted>
                เขียนเรียงตามวัคซีนที่ได้รับเเต่เเรกจนถึงปัจจุบัน
                  </Form.Text>
                <Form.Control as="textarea" rows={3} value={petc_vaccine} onChange={(e)=>{setPetvaccine(e.target.value)}}/>
  
  <br />
        
               
    </Form.Group>
    
            </Form>

            </Card.Body>
            </Card>
            <br></br>
            <br></br>
            <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
      <Card.Header  className = "kh1">ลงทะเบียนบริจาคโลหิตฉุกเฉิน</Card.Header>
      <Card.Body>
        
        <Card.Text>
        " เนื่องด้วยเลือดเเมวไม่สามารถเก็บได้เกิน 24 ชั่วโมง ทางโรงพยาบาลสัตว์มหาวิทยาลัยสงขลานครินทร์จึงได้มีการลงทะเบียนการบริจาคโลหิตฉุกเฉินขึ้น 
ผู้ที่ลงทะเบียนทางโรงพยาบาลจะทำการติดต่อทางโทรศัพท์เมื่อต้องการเลือด หรือ ให้เบอร์โทรศัพท์กับเจ้าของเเมวที่ต้องการเลือด "
        </Card.Text>
        <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                ลงทะเบียนบริจาคโลหิตฉุกเฉิน
            </Form.Label>
              
            </Form>
           <Form className = "kh2">

           <Col sm={3} className="my-1 mr-2" value = {petc_emerg} onChange={(e)=>{setPetemerg(e.target.value)}}>
           <Form.Check value ="Y"  type="radio"
            label="ต้องการ"
          />
          
        </Col>
        <Col sm={3} className="my-1 mr-2">
        <Form.Check value ="N"  type="radio"
            label="ไม่ต้องการ"
          />
          
        </Col>
        <br></br>
        
        <Form.Check
                className = "kh2"
                label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
          

           </Form>
            
            
          
        
    <Button onClick={()=>sendSubmit()}>Submit</Button>
    {isSuccess && <Redirect to="/Home_Owner" /> }
      </Card.Body>
    </Card>
            
       
      
  

<br></br>
<br></br>
<br></br>
               
                            </div>
                
                </div>
    );
	
}

export default Owner_Pet_cat;