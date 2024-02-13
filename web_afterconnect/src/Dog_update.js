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
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import Admin_add_dog from './Admin_add_dog';
import Admin_add_cat from './Admin_add_cat';
import Admin_add_status from './Admin_add_status';
import Admin_list_owner from './Admin_list_owner';
import Home from './Home';

import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
function Dog_update() {

    const {id} = useParams();
    const [hnd, setHnd] = useState("");
    const [pet_name, setPetname] = useState("");
    const [pet_weight, setPetweigt] = useState("");
    const [pet_vaccine, setPetvaccine] = useState("");
    const [pet_bloodtype, setPetbloodtype] = useState("");
    const [searchterm, setsearchTerm] = useState("");
   
    
    const [isSuccess, setIsSuccess] = useState(false);
  
    
    const [hasToken, setHasToken] = useState(true);	
	  const [eventList, setEventList] = useState([])
    const [datar, setData] = useState([])
    

    useEffect (()=>{
		
		
			axios.get('http://localhost/api/v4/list_downer/'+id,
			).then (
				res=> {console.log("getting from...",res.data)
          
                setHnd(res.data[0].hnd);
                setPetname(res.data[0].pet_name);
                setPetweigt(res.data[0].pet_weight);
                setPetvaccine(res.data[0].pet_vaccine);
                setPetbloodtype(res.data[0].pet_bloodtype);
                
        }).catch(err => console.log(err))	
		
		
	}, [id]);
    
 
  
 
    
	function sendAddEvent(){
		axios.put('http://localhost/api/v4/update_dog_ad',
				{
		
                    'hnd':hnd,
                    'pet_name':pet_name,
                    'pet_bloodtype':pet_bloodtype,
                    'pet_weight':pet_weight,
                    'pet_vaccine':pet_vaccine,

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
</div>
<br></br>
<div>
          <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">เเก้ไขข้อมูลสัตว์เลี้ยงประเภทสุนัข</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลสัตว์เลี้ยง</Form.Label></Form.Row>
             <Form>
             <fieldset disabled>
             <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > ID สุนัข</Form.Label>
            <Form.Control id="disabledTextInput" type="text" placeholder="น้ำหนัก" value = {hnd} onChange={(e)=>{setHnd(e.target.value)}}/>
            <Form.Text id="passwordHelpInline" muted>
            กรอกเเค่ตัวเลข
              </Form.Text>
            </Form.Group>

            < Form.Group as={Col} >
            <Form.Label  >ชื่อสุนัข</Form.Label>
            <Form.Control  type="text" placeholder="ชื่อสุนัข" value={pet_name} onChange={(e)=>{setPetname(e.target.value)}}/>
            
            </Form.Group>
        
            </Form.Row>
            </fieldset>
            
           
            <Form.Row className = "kh2">
            

                < Form.Group as={Col} >
                <Form.Label  > น้ำหนัก(กิโลกรัม)</Form.Label>
                <Form.Control type="text" placeholder="น้ำหนัก" value={pet_weight} onChange={(e)=>{setPetweigt(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                กรอกเเค่ตัวเลข
                  </Form.Text>
                </Form.Group>

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
    <Button onClick={()=>sendAddEvent()}>Update</Button>
    {isSuccess && <Redirect to="/Home_Admin" /> }
            </Form>

            </Card.Body>
            </Card>
          </div>
            
<br></br>
<div>
              
          
                <br></br>
                <br></br>
               
                            </div>


        </div>
        );

}

export default Dog_update;