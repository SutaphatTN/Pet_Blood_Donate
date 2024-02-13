import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Home_Owner from './Home_Owner';
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Pet_infor from './Pet_infor';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import Home from './Home';
import dog from './Picture/dog.png';
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
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
 
function Owner_dog_time(){


  const [own_id, setOwn_id] = useState("");
  
  const [own_fname, setFirstname] = useState("");
	const [own_lname, setLastname] = useState("");
  const [hnd, setHnd] = useState("");
  const [apm_time, setApm_time] = useState("");
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
		
    if (sessionStorage.getItem('user_api_token')==null) {
      setHasToken(false);
    }else {
      axios.get('http://localhost/api/v4/list_doga?api_token='+sessionStorage.getItem('user_api_token'),
      ).then (
        res=> {	
            console.log("getting from...",res.data)
            setDatar(res.data)
          }).catch(err => console.log(err))	
      
      }
    }, []);

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
  
  window.location = '/Booking/'+hnd
 
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
              
          <Card style={{ width: '90rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลสัตว์เเละID</Card.Header>
             <Card.Body>
             <Card style={{ width: '80rem', marginLeft: '2vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">สุนัข</Card.Header>
             <Card.Body>
             <img src={dog} alt="cur" 
             height={120}
             width={120}
            /><br></br>
            <br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID สุนัข</th>
          <th >ชื่อสุนัข</th>
          <th >เพศ</th>
          <th >น้ำหนัก สุนัข(kg)</th>
          <th >วัน/เดือน/ปีเกิด สุนัข</th>
          <th >วัคซีน</th>
          <th >กรุ๊ปเลือด</th>
          <th >Action</th>
          
          
        </tr>
      </thead>
      <tbody>
        {
          datar.map((item) =>(
            <tr>
          <td>{item.hnd} </td>
          <td>{item.pet_name} </td>
          <td>{item.pet_sex} </td>
          <td>{item.pet_weight} </td>
          <td>{item.pet_birthday} </td>
          <td>{item.pet_vaccine} </td>
          <td>{item.pet_bloodtype} </td>
          <td>
          
      <Button variant="warning" onClick={()=>UserBooking(item.hnd)} >ระบุเวลา</Button>
      
    
 
    </td>
          


          
          
          </tr>
  
            )
              )
          }
          
        </tbody>
      </Table>
             </Card.Body>
            </Card>
            <br></br>
           
         
    
                </Card.Body>
                </Card>
                <br></br>
                <br></br>

               
                            </div>
                
                </div>
    );
	
}

export default Owner_dog_time;