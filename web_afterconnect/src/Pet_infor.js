import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import dog from './Picture/dog.png';
import cat from './Picture/cat.png';
import Home_Owner from './Home_Owner';
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Owner_dog_time from './Owner_dog_time';
import Pet_time from './Pet_time';
import Owner_Profile from './Owner_Profile';
import Home from './Home';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './Total.css';  
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Profile_Student from './Profile_Student';
  import React, { useState, useEffect } from 'react';
 
function Pet_infor(){

  const [own_id, setOwnid] = useState("");
  const [own_fname, setFirstname] = useState("");
	const [own_lname, setLastname] = useState("");
  const [order_d, setOrder_d] = useState("ASC");
  const [order_c, setOrder_c] = useState("ASC");
 

  const [hasToken, setHasToken] = useState(true);	
	const [eventList, setEventList] = useState([]);
  const [eventList1, setEventList1] = useState([]);
  const [datar_d, setData_d] = useState([])
  const [datar_c, setData_c] = useState([])
  const sorting_d =(col)=>{
    if(order_d ==="ASC"){
      const sorted_d =[...datar_d].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setData_d(sorted_d);
      setOrder_d("DSC");
    }
    else if(order_d ==="DSC"){
      const sorted =[...datar_d].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setData_d(sorted);
      setOrder_d("ASC");
    }
  }
  const sorting_c =(col)=>{
    if(order_c ==="ASC"){
      const sorted_c =[...datar_c].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setData_c(sorted_c);
      setOrder_c("DSC");
    }
    else if(order_c ==="DSC"){
      const sorted =[...datar_c].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setData_c(sorted);
      setOrder_c("ASC");
    }
  }


//  const [own_id, set] = useState("");

//   const [pet_name, setPetname] = useState("");
//   const [pet_birthday, setPetbirthday] = useState("");
// 	const [pet_sex, setPetsex] = useState("");
// 	const [pet_weight, setPetweigt] = useState("");
//   const [pet_vaccine, setPetvaccine] = useState("");
//   const [pet_bloodtype, setPetbloodtype] = useState("");
function UserDelete_c(hnc){
  
  
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
 function UserUpdate_c(hnc){

  window.location = '/Pet_cat_update/'+hnc
 
 }

function UserDelete_d(hnd){
  
  
  axios.delete(`http://localhost/api/v4/delete_dog_t?hnd=${hnd}`,
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
 function UserUpdate_d(hnd){

  window.location = '/Pet_dog_update/'+hnd
 
 }
 function UserAdd_d(){

  window.location = '/Owner_Pet_dog'
 
 }
 function UserAdd_c(){

  window.location = '/Owner_Pet_cat'
 
 }
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
		
  if (sessionStorage.getItem('user_api_token')==null) {
    setHasToken(false);
  }else {
    axios.get('http://localhost/api/v4/list_doga?api_token='+sessionStorage.getItem('user_api_token'),
    ).then (
      res=> {	
				
        console.log("getting from...",res.data)
        setData_d(res.data)
      }).catch(err => console.log(err))	
  
  }
}, []);

useEffect (()=>{
		
  if (sessionStorage.getItem('user_api_token')==null) {
    setHasToken(false);
  }else {
    axios.get('http://localhost/api/v4/list_cata?api_token='+sessionStorage.getItem('user_api_token'),
    ).then (
      res=> {
				
            console.log("getting from...",res.data)
            setData_c(res.data)
          }).catch(err => console.log(err))	
      
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
            <Route path="/Owner_dog_time" component={Owner_dog_time} />
            <Route path="/Pet_time" component={Pet_time} />
            <Route path="/Owner_Profile" component={Owner_Profile} />
            <Route path="/Home" component={Home} />
            <Route path="/Home_Owner" component={Home_Owner} />
            
          </Switch>
<br></br>
<br></br>
          <div>
              
          <Card style={{ width: '90rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลสัตว์เลี้ยง</Card.Header>
             <Card.Body>
             <Card style={{ width: '80rem', marginLeft: '2vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">สุนัข</Card.Header>
             <Card.Body>
             <img src={dog} alt="cur" 
          height={120}
          width={120}
        />
             <br></br> <br></br>  <Button variant="success"style={{  marginLeft: '57vw', marginTop: '0.09vh '}}onClick={UserAdd_d}>เพิ่มสุนัข</Button>{' '}<br></br><br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID สุนัข</th>
          <th onClick={()=>sorting_d("pet_name")}>ชื่อสุนัข</th>
          <th onClick={()=>sorting_d("pet_sex")}>เพศ</th>
          <th >น้ำหนัก สุนัข(kg)</th>
          <th >วัน/เดือน/ปีเกิด สุนัข</th>
          <th onClick={()=>sorting_d("pet_vaccine")}>วัคซีน</th>
          <th onClick={()=>sorting_d("pet_bloodtype")}>กรุ๊ปเลือด</th>
          <th >Action</th>
          
          
        </tr>
      </thead>
      <tbody>
        {
          datar_d.map((item) =>(
            <tr>
          <td>{item.hnd} </td>
          <td>{item.pet_name} </td>
          <td>{item.pet_sex} </td>
          <td>{item.pet_weight} </td>
          <td>{item.pet_birthday} </td>
          <td>{item.pet_vaccine} </td>
          <td>{item.pet_bloodtype} </td>
          <td>
          <ButtonGroup className="mb-2">
      <Button variant="primary" onClick={()=>UserUpdate_d(item.hnd)}>Edit</Button>
      
      <Button  variant="danger" onClick={()=>UserDelete_d(item.hnd)}>Delete</Button>
    </ButtonGroup>
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
            <br></br>
            <Card style={{ width: '80rem', marginLeft: '2vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">เเมว</Card.Header>
             <Card.Body>
             <img src={cat} alt="cur" 
          height={120}
          width={120}
        />
              
              <br></br> <br></br><Button variant="success"style={{  marginLeft: '57vw', marginTop: '0.09vh '}}onClick={UserAdd_c}>เพิ่มเเมว</Button>{' '} <br></br><br></br>
              <Table striped bordered hover>
    <thead className='thead-dark'>
      <tr>
    
        <th >ID เเมว</th>
        <th onClick={()=>sorting_c("petc_name")}>ชื่อเเมว</th>
        <th >เพศ</th>
        <th >น้ำหนัก เเมว(kg)</th>
        <th >วัน/เดือน/ปีเกิด เเมว</th>
        <th onClick={()=>sorting_c("petc_vaccine")}>วัคซีน</th>
        <th onClick={()=>sorting_c("petc_emerg")}>บริจาคฉุกเฉิน</th>
        <th >Action</th>
        
        
      </tr>
    </thead>
    <tbody>
        {datar_c.map((item) =>(
          <tr>
        <td>{item.hnc} </td>
        <td>{item.petc_name} </td>
        <td>{item.petc_sex} </td>
        <td>{item.petc_weight} </td>
        <td>{item.petc_birthday} </td>
        <td>{item.petc_vaccine} </td>
        <td>{item.petc_emerg} </td>
        <td>
        <ButtonGroup className="mb-2">
        <Button variant="primary" onClick={()=>UserUpdate_c(item.hnc)}>Edit</Button>
      
      <Button  variant="danger" onClick={()=>UserDelete_c(item.hnc)}>Delete</Button>
  
  </ButtonGroup>
       
          
          </td>
        


        
        
      </tr>

        )
          )
      }
      
    </tbody>
  </Table>
           
          
            
            
               
             </Card.Body>
            </Card>
            
            
    
                </Card.Body>
                </Card>
                <br></br>
                <br></br>
               
                            </div>
                
                </div>
    );
	
}

export default Pet_infor;