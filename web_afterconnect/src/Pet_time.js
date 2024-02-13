import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import book from './Picture/book.png';
import Home_Owner from './Home_Owner';
import Owner_Pet_dog from './Owner_Pet_dog';
import Owner_Pet_cat from './Owner_Pet_cat';
import Pet_infor from './Pet_infor';
import Owner_dog_time from './Owner_dog_time';
import Owner_Profile from './Owner_Profile';
import Home from './Home';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import React, { useState, useEffect } from 'react';


import './Total.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Profile_Student from './Profile_Student';
 
function Pet_time(){

  const [own_id, setOwnid] = useState("");
  const [own_fname, setFirstname] = useState("");
	const [own_lname, setLastname] = useState("");
  const [datar, setDatar] = useState([])
  
  const [hasToken, setHasToken] = useState(true);	
	const [eventList, setEventList] = useState([]);
  const [order, setOrder] = useState("ASC");
  
  const sorting =(col)=>{
    if(order ==="ASC"){
      const sorted =[...datar].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setDatar(sorted);
      setOrder("DSC");
    }
    else if(order ==="DSC"){
      const sorted =[...datar].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setDatar(sorted);
      setOrder("ASC");
    }
  }

  function UserDelete(apm_id){
  
  
    axios.delete(`http://localhost/api/v4/deleteapm_dog_t?apm_id=${apm_id}`,
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
        axios.get('http://localhost/api/v4/listapm_doga?api_token='+sessionStorage.getItem('user_api_token'),
        ).then (
          res=> {	
            console.log("getting from...",res.data)
            setDatar(res.data)
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
            <Route path="/Pet_infor" component={Pet_infor} />
            <Route path="/Owner_dog_time" component={Owner_dog_time} />
            <Route path="/Owner_Profile" component={Owner_Profile} />
            <Route path="/Home" component={Home} />
            <Route path="/Home_Owner" component={Home_Owner} />
            
          </Switch>
<br></br>
<br></br>
          <div>
              
          <Card style={{ width: '70rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลการบริจาคเลือด</Card.Header>
             <Card.Body>
             <img src={book} alt="cur" 
          height={130}
          width={130}
          
        /> 
        <br></br><br></br>
        <Table striped bordered hover>
        <thead className='thead-dark'>
          <tr>
        
            <th >ID การจอง</th>
            <th >ID สุนัข</th>
            <th onClick={()=>sorting("pet_name")}>ชื่อสุนัข</th>
            <th >เพศ</th>
            <th >วัน/เดือน/ปีเกิด จองวันบริจาค</th>
            <th >เวลานัดหมาย</th>
            <th onClick={()=>sorting("pet_sex")}>สถานะ</th>

            <th >Action</th>
            
            
          </tr>
        </thead>
        <tbody>
          {
            datar.map((item) =>(
              <tr>
            <td>{item.apm_id} </td>
            <td>{item.hnd} </td>
            <td>{item.pet_name} </td>
            <td>{item.pet_sex} </td>
            <td>{item.apm_date} </td>
            <td>{item.apm_time} </td>
            <td>{item.apm_status} </td>
            <td>
            <Button  variant="danger" onClick={()=>UserDelete(item.apm_id)}>Delete</Button>
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
               
                            </div>
                
                </div>
    );
	
}

export default Pet_time;