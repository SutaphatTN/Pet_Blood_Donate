import Carousel from 'react-bootstrap/Carousel'
import {CSVLink}from "react-csv";
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
import Admin_add_dog from './Admin_add_dog';
import Admin_add_cat from './Admin_add_cat';
import Admin_add_status from './Admin_add_status';
import Admin_list_owner from './Admin_list_owner';
import Home from './Home';
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
function Update_time() {

    const {id} = useParams();
    const [apm_id, setApm_id] = useState("");
    const [pet_name, setPetname] = useState("");
    const [own_fname, setFirstname] = useState("");
    const [own_lname, setLastname] = useState("");
    const [apm_date, setApm_date] = useState("");
    const [apm_time, setApm_time] = useState("");
    const [apm_status, setApm_status] = useState("");
   
    const [searchterm, setsearchTerm] = useState("");
   
    
    const [isSuccess, setIsSuccess] = useState(false);
  
    
    const [hasToken, setHasToken] = useState(true);	
	  const [eventList, setEventList] = useState([])
    const [datar, setData] = useState([])
    

    useEffect (()=>{
		
		
			axios.get('http://localhost/api/v4/list_alla_u/'+id,
			).then (
				res=> {console.log("getting from...",res.data)
          
                setApm_id(res.data[0].apm_id);
                setPetname(res.data[0].pet_name);
                setFirstname(res.data[0].own_fname);
                setLastname(res.data[0].own_lname);
                setApm_date(res.data[0].apm_date);
                setApm_time(res.data[0].apm_time);
                setApm_status(res.data[0].apm_status);
                
        }).catch(err => console.log(err))	
		
		
	}, [id]);
    
 
  
 
    
	function sendAddEvent(){
		axios.put('http://localhost/api/v4/updateapm_dog_t',
				{
		
                    'apm_id':apm_id,
                    'apm_date':apm_date,
                    'apm_time':apm_time,
                    'apm_status':apm_status

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
             <Card.Header className = "kh1">เเก้ไขข้อมูลสัตว์การจองวันบริจาคเลือด</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลสัตว์เลี้ยง</Form.Label></Form.Row>
             <Form>
             <fieldset disabled>
             <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > ID การจอง</Form.Label>
            <Form.Control id="disabledTextInput" type="text" placeholder="น้ำหนัก" value = {apm_id} onChange={(e)=>{setApm_id(e.target.value)}}/>
        
            </Form.Group>
            < Form.Group as={Col} >
            <Form.Label  >ชื่อสุนัข</Form.Label>
            <Form.Control id="disabledTextInput" type="text" placeholder="ชื่อสุนัข" value={pet_name} onChange={(e)=>{setPetname(e.target.value)}}/>
            
            </Form.Group>
            < Form.Group as={Col} >
            </Form.Group>
        
            </Form.Row>
           
            
           
            <Form.Row className = "kh2">
            

                < Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control id="disabledTextInput" type="text" placeholder="น้ำหนัก" value={own_fname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                
                </Form.Group>

                < Form.Group as={Col} >
                <Form.Label  >นาสกุล</Form.Label>
                <Form.Control id="disabledTextInput" type="text" placeholder="กรุ๊ปเลือด" value={own_lname} onChange={(e)=>{setLastname(e.target.value)}}/>
                
                </Form.Group>
                < Form.Group as={Col} >
            </Form.Group>
            
            </Form.Row>
            </fieldset>
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                
            
                <Form.Row className = "kh3"> <Form.Label  > จองเวลา</Form.Label></Form.Row>
                <Form.Row className = "kh2">
            < Form.Group as={Col} >
            <Form.Label  > วันที่</Form.Label>
                <Form.Control type="date" placeholder="วัน/เดือน/ปี" value={apm_date} 	onChange={(e)=>{setApm_date(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                 
                  </Form.Text>
                  </Form.Group>
            < Form.Group as={Col} >
                <Form.Label  > เวลานัดหมาย</Form.Label>
                <Form.Control as="select" value={apm_time} 	onChange={(e)=>{setApm_time(e.target.value)}}
                custom defaultValue ="เลือก...">
                  <option value=""></option>
                 <option value="09.00 น">09.00 น.</option>
                 <option value="10.00 น.">10.00 น.</option>
                 <option value="11.00 น.">11.00 น.</option>
                 <option value="13.00 น.">13.00 น.</option>
                 <option value="14.00 น.">14.00 น.</option>
                 <option value="15.00 น.">15.00 น.</option>
                 <option value="16.00 น.">16.00 น.</option>
                


            </Form.Control>
            
            
                </Form.Group>
                
                
            </Form.Row>
            <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  >status</Form.Label>
            <Form.Control as="select"  value={apm_status} 	onChange={(e)=>{setApm_status(e.target.value)}}
                custom defaultValue ="เลือก...">
                <option value="wait for information">wait for information</option>
                 <option value="บริจาคโลหิตสำเร็จ">บริจาคโลหิตสำเร็จ</option>
                 <option value="ยกเลิกการจองวันบริจาค">ยกเลิกการจองวันบริจาค</option>
                 <option value="ยืนยันวันบริจาคโลหิต">ยืนยันวันบริจาคโลหิต</option>
                 
                 


            </Form.Control>
            
            
            </Form.Group>

           
            < Form.Group as={Col} >
            
            
            </Form.Group>
            
        </Form.Row>
            

     
     
      
   
 
            

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

export default Update_time;