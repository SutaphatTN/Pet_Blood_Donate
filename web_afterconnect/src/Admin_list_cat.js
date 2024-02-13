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
import cat from './Picture/cat.png';
import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Admin_list_cat() {
    
    const [hasToken, setHasToken] = useState(true);	
	const [eventList, setEventList] = useState([])

    useEffect (()=>{
		
		console.log(sessionStorage.getItem('admin_api_token'));
		if (sessionStorage.getItem('admin_api_token')==null) {
			setHasToken(false);
		}else {
			axios.get('http://localhost/api/v4/list_cat?api_token='+sessionStorage.getItem('admin_api_token'),
			).then (
				res=> {	
				
						
						let item_list = [];
						for(let i = 0;i < res.data.length;i++){
							item_list[i] = [  res.data[i].petc_name, res.data[i].petc_birthday, res.data[i].petc_sex ,res.data[i].petc_weight , res.data[i].petc_vaccine]; 
						}
						
						setEventList(item_list);
						
				}
			
			);
			
			
		
		}
	}, []);

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
  
    
        <ReactBootStrap.NavDropdown.Item > <Link >ข้อมูลเจ้าของสัตว์เลี้ยง</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link>ข้อมูลสัตว์เลี้ยง</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item ><Link>ข้อมูลสถิติ</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.NavDropdown title="อื่นๆ" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link >เเจ้งข้อมูลข่าวสาร</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link>กรอกผลข้อมูลกรุ้ปเลือด</Link></ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Item ><Link>ปรับสถานะการจอง</Link></ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Item ><Link>ส่งคำขอกรุ๊ปเลือด</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className = "name">
    ผู้ดูเเลระบบ
   </div>
    &nbsp;&nbsp;&nbsp;
    <Link to="/pricing">
    <Button variant="outline-light">Signout</Button>{' '}
    </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
            

            
          </Switch>
</div>
<br></br>
<br></br>
<div>
              
          <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '-0.10vh '}}>
             <Card.Header className = "kh1">ข้อมูล</Card.Header>
             <Card.Body>
             <Card style={{ width: '40rem', marginLeft: '2vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">ข้อมูลเเมว</Card.Header>
             <Card.Body>
             <img src={cat} alt="cur" 
          height={120}
          width={120}/>
             
             {eventList.map(eventItem => (
              
				<h6> 
          <div className = "kh2">
                    ชื่อ :  {eventItem[0]} 
                    <br></br>
                    วัน/เดือน/ปีเกิด :  {eventItem[1]} 
                    <br></br> 
                    เพศ :  {eventItem[2]}
					<br></br>
					น้ำหนัก :   {eventItem[3]}  
					<br></br>
					วัคซีน :   {eventItem[4]}
					<br></br>
					
					
          <br></br>
          
          </div>
          --------------------------------------------------------------------------------------------
					
				
				</h6>
			))}
     
             </Card.Body>
            </Card>
            <br></br>
            <br></br>
            
            
            
    
                </Card.Body>
                </Card>
                <br></br>
                <br></br>
               
                            </div>


        </div>
        );

}

export default Admin_list_cat;