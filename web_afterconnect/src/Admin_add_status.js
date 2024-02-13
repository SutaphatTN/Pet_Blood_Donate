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
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import add from './add';
import Home_Admin from './Home_Admin';
import Admin_add_dog from './Admin_add_dog';
import Admin_add_cat from './Admin_add_cat';
import Admin_list_owner from './Admin_list_owner';
import {CSVLink}from "react-csv";
import Home from './Home';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
function Admin_add_status() {

    const [apm_id, setApm_id] = useState("");
    const [apm_status, setApm_status] = useState("");
    const [searchterm, setsearchTerm] = useState("");
    const [order, setOrder] = useState("ASC");
    
    const [hasToken, setHasToken] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);	
	  const [eventList, setEventList] = useState([])
    const [eventList1, setEventList1] = useState([])
    const [eventList2, setEventList2] = useState([])
    const [datar, setDatar] = useState([])
    const [modalin, setModalin]= useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
  
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
		
      axios.get('http://localhost/api/v4/list_alla_t',
      ).then (
          res=> {	console.log("getting from...",res.data)
            setDatar(res.data)
          }).catch(err => console.log(err))	
        
        
      
      
    }, []);
  function UserStatus(apm_id){
		axios.put(`http://localhost/api/v4/updateapm_dog_ad?apm_id=${apm_id}'`,
				{
					
                    'apm_id':apm_id,
                    'apm_status':apm_status,
					         
                    
			
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
  function UserUpdate(apm_id){
  
    window.location = '/Update_time/'+apm_id
   
   }
   function UserEmail(apm_id){
  
    window.location = '/Email_dog/'+apm_id
   
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
        <ReactBootStrap.NavDropdown.Item ><Link to = "">ข้อมูลการจองวันบริจาค</Link></ReactBootStrap.NavDropdown.Item>

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
            <Route path="/Admin_add_cat" component={Admin_add_cat} />
            <Route path="/Home" component={Home} />
            
          

            
          </Switch>
</div>
<br></br>
<div>
          
          </div>
<br></br>
<div>

<Card style={{ width: '105rem', marginLeft: '6vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">ข้อมูลสุนัข</Card.Header>
             <Card.Body>
              <input type="text" placeholder="Search...? " className="form-control" style={{marginTop: 50, marginBottom: 20,width: "40%"}}
              onChange={(e)=>{
                setsearchTerm(e.target.value);
              }}/><CSVLink style={{  marginLeft: '75vw', marginTop: '0.09vh '}} data = {datar} className ="btn btn-success mb-3" filename = "Dog_Appointment">Export to Excel</CSVLink>
              
              <br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID การจอง</th>
          <th onClick={()=>sorting("pet_name")}>ชื่อสุนัข</th>
          <th onClick={()=>sorting("own_fname")}>ชื่อ-สกุลเจ้าของ</th>
          <th>เบอร์โทรศัพท์</th>
          <th onClick={()=>sorting("pet_sex")}>เพศ</th>
          <th onClick={()=>sorting("pet_vaccine")}>ประวัติวัคซีน</th>
          <th onClick={()=>sorting("pet_bloodtype")}>กรุ๊ปเลือด</th>
          <th >วันที่นัดบริจาคเลือด</th>
          <th >เวลา</th>
          <th onClick={()=>sorting("apm_status")}>status</th>
          <th >Action</th>
          <th >Email</th>
          
          
        </tr>
      </thead>
      <tbody>
        {
          datar.filter((item)=>
            item.pet_name.toLowerCase().includes(searchterm.toLowerCase()) ||
            item.own_fname.toLowerCase().includes(searchterm.toLowerCase()) ||
            item.apm_status.toLowerCase().includes(searchterm.toLowerCase()) 
          )
          .map((item) =>(
            <tr>
          <td>{item.apm_id} </td>
          <td>{item.pet_name} </td>
          <td>{item.own_fname}  {item.own_lname} </td>
          <td>{item.own_phone}   </td>
          <td>{item.pet_sex} </td>
          <td>{item.pet_vaccine} </td>
          <td>{item.pet_bloodtype} </td>
          <td>{item.apm_date} </td>
          <td> 
            {item.apm_time} </td>
          <td>
          {item.apm_status } 
            </td>
            <td><ButtonGroup className="mb-2">
      <Button variant="primary" onClick={()=>UserUpdate(item.apm_id)} >Edit</Button>
      
      <Button  variant="danger" onClick={()=>UserDelete(item.apm_id)}>Delete</Button>
    </ButtonGroup></td>
            <td> <Button  variant="info" onClick={()=>UserEmail(item.apm_id)}>Send Email</Button></td>
          
       


          
          
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
          <Modal show ={show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <add/>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>

        </div>
        

        );

}

export default Admin_add_status;