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
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Owner_dog_time from './Owner_dog_time';
import cat_dog from './Picture/cat_dog.jpeg';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
function Pet_cat_update() {

    const {id} = useParams();
    const [hnc, setHnc] = useState("");
    const [petc_name, setPetcname] = useState("");
    const [petc_weight, setPetcweigt] = useState("");
    const [petc_vaccine, setPetcvaccine] = useState("");
   
    const [searchterm, setsearchTerm] = useState("");
   
    
    const [isSuccess, setIsSuccess] = useState(false);
  
    
    const [hasToken, setHasToken] = useState(true);	
	  const [eventList, setEventList] = useState([])
    const [own_id, setOwnid] = useState("");
    const [own_fname, setFirstname] = useState("");
	  const [own_lname, setLastname] = useState("");
    const [datar, setData] = useState([])


    useEffect (()=>{
		
		
      if (sessionStorage.getItem('user_api_token')==null) {
        setHasToken(false);
      }else {
        axios.get('http://localhost/api/v4/profile?api_token='+sessionStorage.getItem('user_api_token'),
        ).then (
          res=> {	
            
            setOwnid(res.data[0].own_id);
            setFirstname(res.data[0].own_fname);
            setLastname(res.data[0].own_lname);
            
            
          }
        );
        
        
      
      }
    }, []);
    

    useEffect (()=>{
		
		
			axios.get('http://localhost/api/v4/list_cowner/'+id,
			).then (
				res=> {console.log("getting from...",res.data)
          
                setHnc(res.data[0].hnc);
                setPetcname(res.data[0].petc_name);
                setPetcweigt(res.data[0].petc_weight);
                setPetcvaccine(res.data[0].petc_vaccine);
               
                
        }).catch(err => console.log(err))	
		
		
	}, [id]);
    
 
  
 
    
	function sendAddEvent(){
		axios.put('http://localhost/api/v4/update_cat_ad',
				{
		
                    'hnc':hnc,
                    'petc_name':petc_name,
                    'petc_weight':petc_weight,
                    'petc_vaccine':petc_vaccine,

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
<div>
          <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">เเก้ไขข้อมูลสัตว์เลี้ยงประเภทเเมว</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลสัตว์เลี้ยง</Form.Label></Form.Row>
             <Form>
             
             <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > ID เเมว</Form.Label>
            <Form.Control disabled readOnly type="text" placeholder="น้ำหนัก" value = {hnc} onChange={(e)=>{setHnc(e.target.value)}}/>
            <Form.Text id="passwordHelpInline" muted>
            กรอกเเค่ตัวเลข
              </Form.Text>
            </Form.Group>

            < Form.Group as={Col} >
            <Form.Label  >ชื่อเเมว</Form.Label>
            <Form.Control id="disabledTextInput" type="text" placeholder="ชื่อเเมว" value={petc_name} onChange={(e)=>{setPetcname(e.target.value)}}/>
            
            </Form.Group>
        
            </Form.Row>
       
            
           
            <Form.Row className = "kh2">
            

                < Form.Group as={Col} >
                <Form.Label  > น้ำหนัก(กิโลกรัม)</Form.Label>
                <Form.Control type="text" placeholder="น้ำหนัก" value={petc_weight} onChange={(e)=>{setPetcweigt(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                กรอกเเค่ตัวเลข
                  </Form.Text>
                </Form.Group>

                < Form.Group as={Col} >
                
                
                </Form.Group>
            
            </Form.Row>
            
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ประวัติวัคซีน</Form.Label>
                <Form.Text id="passwordHelpInline" muted>
                เขียนเรียงตามวัคซีนที่ได้รับเเต่เเรกจนถึงปัจจุบัน
                  </Form.Text>
                <Form.Control as="textarea" rows={3} value={petc_vaccine} onChange={(e)=>{setPetcvaccine(e.target.value)}}/>
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

export default Pet_cat_update;