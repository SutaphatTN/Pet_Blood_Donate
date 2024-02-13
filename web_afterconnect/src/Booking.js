import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Home_Owner from './Home_Owner';
import Owner_Pet from './Owner_Pet_dog';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import dog from './Picture/dog.png';
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import './Total.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Profile_Student from './Profile_Student';
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
 
function Owner_dog_time(){

  const {id} = useParams();
  const [own_id, setOwn_id] = useState("");
  
  const [own_fname, setFirstname] = useState("");
  const [own_lname, setLastname] = useState("");
  const [hnd, setHnd] = useState("");
  const [apm_time, setApm_time] = useState("");
  const [pet_name, setPetname] = useState("");
  const [pet_sex, setPetsex ]= useState("");
  const [pet_weight, setPetweigt] = useState("");
  const [pet_vaccine, setPetvaccine] = useState("");
  const [pet_bloodtype, setPetbloodtype] = useState("");
  const [pet_birthday, setPetbirthday] = useState("");
  const [apm_date, setApm_date]= useState("");
  
  const [hasToken, setHasToken] = useState(true);	
  const [eventList, setEventList] = useState([]);

  const [isSuccess, setIsSuccess] = useState(false);
  const [datar ,setDatar] = useState([])

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

  function sendSubmit(){
    {
      const url = 'http://localhost/api/v4/apm_dog';
      const formData = new FormData();

      formData.append('own_id',own_id)
      formData.append('hnd',hnd)
      formData.append('apm_time',apm_time)
      formData.append('apm_date',apm_date)
      


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
function UserBooking(hnd){
  
  window.location = '/Update_time/'+hnd
 
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
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">

      <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">ข้อมูลเจ้าของสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">ข้อมูลสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pet_time">ข้อมูลการจองเวลาบริจาคเลือด</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.NavDropdown title="เเก้ไขข้อมูล" id="collasible-nav-dropdown">

      <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">เเก้ไขข้อมูลเจ้าของสัตว์เลี้ยง </Link></ReactBootStrap.NavDropdown.Item>
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Pet_infor">เเก้ไขข้อมูลสุนัข</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pet_time">เเก้ไขข้อมูลเเมว</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        
        <ReactBootStrap.NavDropdown title="กรอกข้อมูลสัตว์เลี้ยง" id="collasible-nav-dropdown">
        
    <ReactBootStrap.NavDropdown.Item > <Link to ="Owner_Pet_dog">กรอกข้อมูลสุนัข</Link></ReactBootStrap.NavDropdown.Item>
 
    <ReactBootStrap.NavDropdown.Item ><Link to ="Pet_time">กรอกข้อมูลเเมว</Link></ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
      <Link to="/Owner_time">
    <ReactBootStrap.Nav.Link href="#deets">ระบุเวลาบริจาคเลือด</ReactBootStrap.Nav.Link>
    </Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav>
    {!hasToken && <Redirect to="" /> }
    <div className = "name"> {own_id} {own_fname} {own_lname} 
   </div>
    &nbsp;&nbsp;&nbsp;
    <Link to="/pricing">
    <Button variant="outline-light">Signout</Button>{' '}
    </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    <Switch>
            
           
             <Route path="/Home_Owner" component={Home_Owner} />
            <Route path="/Owner_Pet" component={Owner_Pet} />
            <Route path="/Pet_infor" component={Pet_infor} />
            <Route path="/Pet_time" component={Pet_time} />
           
           
            
          </Switch>
<br></br>
<br></br>
          <div>
              

                <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "t1">ระบุวันเเละเวลาบริจาคเลือด</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลสัตว์เลี้ยง</Form.Label></Form.Row>
             <Form>
             <Form.Row className = "kh2">
                <Form.Group as={Col} >
               
                </Form.Group> 
            </Form.Row>
           
             </Form>
             <Form.Row className = "kh2">
            

            < Form.Group as={Col} >
            <Form.Label  > ID สุนัข</Form.Label>
            <Form.Control disabled readOnly id="disabledTextInput" type="text" placeholder="น้ำหนัก" value = {hnd} onChange={(e)=>{setHnd(e.target.value)}}/>
            
            </Form.Group>
           
            < Form.Group as={Col} >
            <Form.Label  >ชื่อสุนัข</Form.Label>
            <Form.Control disabled readOnly id="disabledTextInput" type="text" placeholder="ชื่อสุนัข" value={pet_name} onChange={(e)=>{setPetname(e.target.value)}}/>
            
            </Form.Group>
            < Form.Group as={Col} > </Form.Group>
            </Form.Row>
       
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > กรุ็ปเลือด</Form.Label>
                <Form.Control disabled readOnly  type="text" placeholder="กรุ็ปเลือด" value={pet_bloodtype} onChange={(e)=>{setPetbloodtype(e.target.value)}}/>
                </Form.Group>

                < Form.Group as={Col} >
                <Form.Label  > น้ำหนัก(กิโลกรัม)</Form.Label>
                <Form.Control  disabled readOnly type="text" placeholder="น้ำหนัก" value={pet_weight} onChange={(e)=>{setPetweigt(e.target.value)}}/>
                
                </Form.Group>
                < Form.Group as={Col} > </Form.Group>
            
            </Form.Row>
            
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ประวัติวัคซีน</Form.Label>
                
                <Form.Control disabled readOnly as="textarea" rows={3} value={pet_vaccine} onChange={(e)=>{setPetvaccine(e.target.value)}}/>
                <br></br>
               

 
  <br />
            

    </Form.Group>
                
             
                <Form.Row className = "kh3"> <Form.Label  > ระบุวันเเละเวลา</Form.Label></Form.Row>
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
                 <option></option>
                 <option>09.00 น.</option>
                 <option>10.00 น.</option>
                 <option>11.00 น.</option>
                 <option>13.00 น.</option>
                 <option>14.00 น.</option>
                 <option>15.00 น.</option>
                 <option>16.00 น.</option>
                


            </Form.Control>
            
                </Form.Group>
                
            </Form.Row>
            <Form.Check
                className = "kh2"
                label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
            <Button onClick={()=>sendSubmit()}>Submit</Button>
            {isSuccess && <Redirect to="/Home_Owner" /> }
             </Card.Body>
            </Card>
               
                            </div>
                
                </div>
    );
	
}

export default Owner_dog_time;