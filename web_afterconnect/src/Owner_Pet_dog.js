import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Home_Owner from './Home_Owner';
import Owner_Pet_cat from './Owner_Pet_cat';
import Owner_dog_time from './Owner_dog_time';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import Home from './Home';
import dog from './Picture/dog.png';
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
 
function Owner_Pet_dog(){

 /* const [pet_name_error, setPetnameError] = useState("");
  const [pet_sex_error, setPetsexError] = useState("");*/

  
  const [own_id, setOwn_id] = useState("");
  const [own_fname, setFirstname] = useState("");
	const [own_lname, setLastname] = useState("");

  const [pet_name, setPetname] = useState("");
  const [pet_birthday, setPetbirthday] = useState("");
	const [pet_sex, setPetsex] = useState("");
	const [pet_weight, setPetweigt] = useState("");
  const [pet_vaccine, setPetvaccine] = useState("");
  const [pet_bloodtype, setPetbloodtype] = useState("");

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
      const url = 'http://localhost/api/v4/add_dogtt';
      const formData = new FormData();

      formData.append('own_id',own_id)
      formData.append('pet_name',pet_name)
      formData.append('pet_birthday',pet_birthday)
      formData.append('pet_sex',pet_sex)
      formData.append('pet_vaccine',pet_vaccine)
      formData.append('pet_weight',pet_weight)
      formData.append('pet_bloodtype',pet_bloodtype)
    


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
            <Route path="/Owner_Pet_cat" component={Owner_Pet_cat} />
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
             <Card.Header className = "kh1">กรอกข้อมูลสัตว์เลี้ยงประเภทสุนัข</Card.Header>
             <Card.Body>
             <img src={dog} alt="cur" 
          height={120}
          width={120}
        />
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลสัตว์เลี้ยง</Form.Label></Form.Row>
             <Form>
             <Form.Row className = "kh2">
                <Form.Group as={Col} >
               
                </Form.Group> 
            </Form.Row>
           
             </Form>
            
            <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                เพศสัตว์เลี้ยง
            </Form.Label>
            <Form.Control
                as="select"
                /*className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"*/
                value = {pet_sex} onChange={(e)=>{setPetsex(e.target.value)}}
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
                <Form.Control type="text" placeholder="ชื่อ" value={pet_name} onChange={(e)=>{setPetname(e.target.value)}}/>
                </Form.Group> 
            </Form.Row>
           
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > วัน/เดือน/ปีเกิด</Form.Label>
                <Form.Control type="date" placeholder="วัน/เดือน/ปี" 	value={pet_birthday} 	onChange={(e)=>{setPetbirthday(e.target.value)}} />
                <Form.Text id="passwordHelpInline" muted>
                  ตัวอย่าง 7 มกราคม 2020
                  </Form.Text>
                </Form.Group>
            </Form.Row>

            
           
            
            <Form.Row className = "kh2">

            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>กรุ็ปเลือด</Form.Label>
          <Form.Control
                as="select"
                /*className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"*/
                value = {pet_bloodtype} onChange={(e)=>{setPetbloodtype(e.target.value)}}
                custom  defaultValue="เลือก...">
                <option value=""></option>
                <option value="DEA 1.1">DEA 1.1</option>
                <option value="เDEA 1.2">DEA 1.2</option>
                <option value="DEA 3">DEA 3</option>
                <option value="DEA 4">DEA 4</option>
                <option value="DEA 5">DEA 5</option>
                <option value="DEA 6">DEA 6</option>
                <option value="DEA 7">DEA 7</option>
                <option value="DEA 8">DEA 8</option>
                
            
            </Form.Control>
         
        </Form.Group>
           
            
                < Form.Group as={Col} >
                <Form.Label  > น้ำหนัก(กิโลกรัม)</Form.Label>
                <Form.Control type="text" placeholder="น้ำหนัก" value={pet_weight} onChange={(e)=>{setPetweigt(e.target.value)}}/>
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
                <Form.Control as="textarea" rows={3} value={pet_vaccine} onChange={(e)=>{setPetvaccine(e.target.value)}}/>
                <br></br>
                <br></br>
     
     
      
   
 
  <br />
            

                <Form.Check
                className = "kh2"
                label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
    </Form.Group>
    <Button onClick={()=>sendSubmit()}>Submit</Button>
    {isSuccess && <Redirect to="/Home_Owner" /> }
            </Form>

            </Card.Body>
            </Card>
       
      
  

<br></br>
<br></br>
<br></br>
               
                            </div>
                
                </div>
    );
	
}

export default Owner_Pet_dog;