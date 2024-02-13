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
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {CSVLink}from "react-csv";
import Home_Admin from './Home_Admin';
import Admin_add_dog from './Admin_add_dog';
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
function Admin_add_cat() {


    const [hnc, setHnc] = useState("");
    const [petc_weight, setPetcweigt] = useState("");
    const [petc_vaccine, setPetcvaccine] = useState("");
    const [searchterm, setsearchTerm] = useState("");
    const [order, setOrder] = useState("ASC");
    const [datar, setData] = useState([])
   
    
    const [isSuccess, setIsSuccess] = useState(false);
    
    const [hasToken, setHasToken] = useState(true);	
	  const [eventList, setEventList] = useState([])

    const sorting =(col)=>{
      if(order ==="ASC"){
        const sorted =[...datar].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData(sorted);
        setOrder("DSC");
      }
      if(order ==="DSC"){
        const sorted =[...datar].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData(sorted);
        setOrder("ASC");
      }
    }

    useEffect (()=>{
		
		console.log(sessionStorage.getItem('admin_api_token'));
		if (sessionStorage.getItem('admin_api_token')==null) {
			setHasToken(false);
		}else {
			axios.get('http://localhost/api/v4/list_cata_ot?api_token='+sessionStorage.getItem('admin_api_token'),
			).then (
				res=> {	
				
          console.log("getting from...",res.data)
          setData(res.data)
        }).catch(err => console.log(err))	
		
		}
	}, []);

  function UserDelete(hnc){
  
  
    axios.delete(`http://localhost/api/v4/delete_cat_t?hnc=${hnc}`,
  ).then (
    res=> {	
      
      if (res.data.STATUS == "SUCCESSFULLY COMMENT") {
          alert("Delete");
          
      }else {
          alert ("Delete");
          
      }
    }
  );
   }
   function UserUpdate(hnc){
  
    window.location = '/Cat_update/'+hnc
   
   }
   function UserEmail(hnc){
  
    window.location = '/Email/'+hnc
   
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
    <Link to ="Home_Admin">
    <ReactBootStrap.Nav.Link href="/Home_Admin">หน้าเเรก</ReactBootStrap.Nav.Link>
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
            <Route path="/Home_Admin" component={Home_Admin} />
            <Route path="/Admin_add_dog" component={Admin_add_dog} />
            <Route path="/Admin_add_status" component={Admin_add_status} />
            <Route path="/Home" component={Home} />
            
          

            
          </Switch>
</div>
<br></br>
<div>
        
        </div>
          
<br></br>
<div>
            
        
           <Card style={{ width: '105rem', marginLeft: '6vw', marginTop: '0.01vh '}}>
           <Card.Header className = "t1">ข้อมูลเเมว</Card.Header>
           <Card.Body>
            <input type="text" placeholder="Search...? " className="form-control" style={{marginTop: 50, marginBottom: 20,width: "40%"}}
            onChange={(e)=>{
              setsearchTerm(e.target.value);
            }}/>
             <CSVLink style={{  marginLeft: '75vw', marginTop: '0.09vh '}} data = {datar} className ="btn btn-success mb-3" filename = "Cat_Data">Export to Excel</CSVLink>
            <br></br>
           <Table striped bordered hover>
    <thead className='thead-dark'>
      <tr>
    
        <th >ID เเมว</th>
        <th onClick={()=>sorting("petc_name")}>ชื่อเเมว</th>
        <th onClick={()=>sorting("own_fname")}>ชื่อ-สกุลเจ้าของ</th>
        <th >รหัสบัตรประจำตัวประชาชนเจ้าของ</th>
        <th >เบอร์โทรศัพท์</th>
        <th >วัน/เดือน/ปีเกิด เเมว</th>
        <th >น้ำหนัก เเมว(kg)</th>
        <th onClick={()=>sorting("petc_sex")}>เพศ</th>
        <th onClick={()=>sorting("petc_vaccine")}>วัคซีน</th>
        <th onClick={()=>sorting("petc_emerg")}>บริจาคฉุกเฉิน</th>
        <th >Action</th>
        <th >Email</th>
        
        
      </tr>
    </thead>
    <tbody>
        {datar.filter((val)=>{
            if (searchterm === ''){
              return val;
            }else if(
              val.petc_name.toLowerCase().includes(searchterm.toLowerCase())
              
            ){
              return val;
            }
          

        
        }).map((item) =>(
          <tr>
        <td>{item.hnc} </td>
        <td>{item.petc_name} </td>
        <td>{item.own_fname}  {item.own_lname} </td>
        <td>{item.own_idcard} </td>
        <td>{item.own_phone} </td>
        <td>{item.petc_birthday} </td>
        <td>{item.petc_weight} </td>
        <td>{item.petc_sex} </td>
        <td>{item.petc_vaccine} </td>
        <td>{item.petc_emerg} </td>
        <td>
        <ButtonGroup className="mb-2">
    <Button variant="primary" onClick={()=>UserUpdate(item.hnc)}>Edit</Button>
    
    <Button  variant="danger" onClick={()=>UserDelete(item.hnc)}>Delete</Button>
  </ButtonGroup>
          </td>
        <td><Button variant="info" onClick={()=>UserEmail(item.hnc)}>Send Email</Button></td>


        
        
      </tr>

        )
          )
      }
      
    </tbody>
  </Table>
           
          
   
           </Card.Body>
          </Card>
          <br></br>
          <br></br>
          
          
          
  
            
              <br></br>
              <br></br>
             
                          </div>


      </div>
      );

}
export default Admin_add_cat;