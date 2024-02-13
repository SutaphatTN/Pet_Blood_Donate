import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic1 from './Picture/1.jpg';
import pic2 from './Picture/2.jpg';
import pic3 from './Picture/3.jpg';
import user from './Picture/user.png';
import Admin_add_dog from './Admin_add_dog';
import Admin_add_cat from './Admin_add_cat';
import Admin_add_status from './Admin_add_status';
import Admin_list_owner from './Admin_list_owner';
import Home from './Home';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Owner_Profile() {

  const {id} = useParams();
  const [own_id, setOwn_id] = useState(""); 

  const [own_title, setTitle] = useState("");
  const [own_fname, setFirstname] = useState("");
  const [own_lname, setLastname] = useState("");
  const [own_idcard, setIdcard] = useState("");
  const [own_address, setAddress] = useState("");
  const [own_email, setEmail] = useState("");
  const [own_phone, setPhone] = useState("");
  const [hasToken, setHasToken] = useState(true);

  const [apm_time, setApm_time] = useState("");
  const [apm_date, setApm_date]= useState("");
  const [apm_status, setApm_status]= useState("");
  const [pet_name, setPetname] = useState("");
  const [pet_birthday, setPetbirthday] = useState("");
  const [pet_sex, setPetsex] = useState("");
  const [pet_weight, setPetweigt] = useState("");
  const [pet_vaccine, setPetvaccine] = useState("");
  const [pet_bloodtype, setPetbloodtype] = useState("");
  const [order_d, setOrder_d] = useState("ASC");
  const [order_c, setOrder_c] = useState("ASC");
  const [data_d, setData_d] = useState([])
  const [data_c, setData_c] = useState([])
  const [data_ad, setData_ad] = useState([])
  

    const sorting_d =(col)=>{
      if(order_d ==="ASC"){
        const sorted_d =[...data_d].sort((a,b)=>
         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData_d(sorted_d);
        setOrder_d("DSC");
      }
      else if(order_d ==="DSC"){
        const sorted_d =[...data_d].sort((a,b)=>
         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setData_d(sorted_d);
        setOrder_d("ASC");
      }
    }
    const sorting_c =(col)=>{
        if(order_c ==="ASC"){
          const sorted_c =[...data_c].sort((a,b)=>
           a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
          setData_c(sorted_c);
          setOrder_c("DSC");
        }
        else if(order_c ==="DSC"){
          const sorted_c =[...data_c].sort((a,b)=>
           a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
          setData_c(sorted_c);
          setOrder_c("ASC");
        }
      }
  
  function logout() {
		//ระบบ Logout ในระบบ Stateless Authentication นั้น ไม่จำเป็นต้องยิง REST API
		//เพียงเคลียร์ token ออกจาก Memory แล้ว redirect กลับหน้า Login เป็นอันเพียงพอ
		
		sessionStorage.clear();
		setHasToken(false);
		alert("Logged Out");
	}
	useEffect (()=>{
		
		
		axios.get('http://localhost/api/v4/profile_ad/'+id,
			).then (
				res=> {	

                    setOwn_id(res.data[0].own_id);
					
                    setTitle(res.data[0].own_title);
                    setFirstname(res.data[0].own_fname);
                    setLastname(res.data[0].own_lname);
                    setIdcard(res.data[0].own_idcard);
                    setAddress(res.data[0].own_address);
                    setEmail(res.data[0].own_email);
                    setPhone(res.data[0].own_phone);
          
          
        }).catch(err => console.log(err))	
		
		
	}, [id]);

    useEffect (()=>{
		
        axios.get('http://localhost/api/v4/list_doga_av/'+id,
        ).then (
            res=> {	console.log("getting from...",res.data)
              setData_d(res.data)
            }).catch(err => console.log(err))	
          
          
        
        
      }, [id]);

      useEffect (()=>{
		
        axios.get('http://localhost/api/v4/list_cata_av/'+id,
        ).then (
            res=> {	console.log("getting from...",res.data)
              setData_c(res.data)
            }).catch(err => console.log(err))	
          
          
        
        
      }, [id]);

      useEffect (()=>{
		
        axios.get('http://localhost/api/v4/list_alla_tav/'+id,
        ).then (
            res=> {	console.log("getting from...",res.data)
              setData_ad(res.data)
            }).catch(err => console.log(err))	
          
          
        
        
      }, [id]);
    
    
    
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
<br></br>
<div>
<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลเจ้าของสัตว์เลี้ยง</Card.Header>
             <Card.Body>
      <img src={user} alt="cur" 
          height={150}
          width={150}
        />
    {!hasToken && <Redirect to="/" /> }
<br></br>
<br></br>
<Form.Row className = "kh3"> <Form.Label  > ข้อมูลส่วนตัว</Form.Label></Form.Row>
             <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                คำนำหน้า
            </Form.Label>
            <Form.Control  disabled readOnly value = {own_title} onChange={(e)=>{setTitle(e.target.value)}}>
            </Form.Control>
                
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control  disabled readOnly type="text" placeholder="ชื่อ" value={own_fname} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label  > นามสกุล</Form.Label>
                <Form.Control  disabled readOnly type="text" placeholder="นามสกุล" value={own_lname} onChange={(e)=>{setLastname(e.target.value)}}/>
                </Form.Group>

               
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > รหัสบัตรประจำตัวประชาชน</Form.Label>
                <Form.Control disabled readOnly type="text" placeholder="รหัสบัตรประจำตัวประชาชน" value={own_idcard} onChange={(e)=>{setIdcard(e.target.value)}} />
                
                </Form.Group>
                
            </Form.Row>
           
            
            
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เบอร์โทรศัพท์ที่สามารถติดต่อได้</Form.Label>
                <Form.Control disabled readOnly type="text" placeholder="เบอร์โทรศัพท์" value={own_phone} onChange={(e)=>{setPhone(e.target.value)}}/>
               
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Email</Form.Label>
                <Form.Control disabled readOnly type="email" placeholder="Email" value={own_email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
            
            </Form.Row>
        
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ที่อยุ่ปัจจุบัน</Form.Label>
                
                  <Form.Control disabled readOnly as="textarea" rows={3} value={own_address} onChange={(e)=>{setAddress(e.target.value)}}/>  
                  </Form.Group>              <br></br>

            
                </Form>

   
 
 
	</Card.Body>
            </Card>
            <br></br>  <br></br>
            <div>
              
          
             <Card style={{ width: '80rem', marginLeft: '6vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">ข้อมูลสุนัข</Card.Header>
             <Card.Body>
              <br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID สุนัข</th>
          <th onClick={()=>sorting_c("pet_name")}>ชื่อสุนัข</th>
          <th >วัน/เดือน/ปีเกิด สุนัข</th>
          <th >น้ำหนัก สุนัข(kg)</th>
          <th onClick={()=>sorting_d("pet_sex")}>เพศ</th>
          <th onClick={()=>sorting_d("pet_vaccine")}>วัคซีน</th>
          <th onClick={()=>sorting_d("pet_bloodtype")}>กรุ๊ปเลือด</th>
          
          
          
        </tr>
      </thead>
      <tbody>
        {
          data_d.map((item) =>(
            <tr>
          <td>{item.hnd} </td>
          <td>{item.pet_name} </td>
          <td>{item.pet_birthday} </td>
          <td>{item.pet_weight} </td>
          <td>{item.pet_sex} </td>
          <td>{item.pet_vaccine} </td>
          <td>{item.pet_bloodtype} </td>
          
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
            <Card style={{ width: '80rem', marginLeft: '6vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">ข้อมูลการจองวันบริจาคเลือด</Card.Header>
             <Card.Body>
              <br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID การจอง</th>
          <th >ID สุนัข</th>
          <th onClick={()=>sorting_c("pet_name")}>ชื่อสุนัข</th>
          <th>วัน/เดือน/ปี</th>
          <th>เวลา</th>
          <th>สถานะ</th>
          
          
          
        </tr>
      </thead>
      <tbody>
        {
          data_ad.map((item) =>(
            <tr>
          <td>{item.apm_id} </td>
          <td>{item.hnd} </td>
          <td>{item.pet_name} </td>
          <td>{item.apm_date} </td>
          <td>{item.apm_time} </td>
          <td>{item.apm_status} </td>
          
          
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
            
            <Card style={{ width: '80rem', marginLeft: '6vw', marginTop: '0.01vh '}}>
             <Card.Header className = "t1">ข้อมูลเเมว</Card.Header>
             <Card.Body>
              <br></br>
             <Table striped bordered hover>
      <thead className='thead-dark'>
        <tr>
      
          <th >ID เเมว</th>
          <th onClick={()=>sorting_c("petc_name")}>ชื่อเเมว</th>
          <th >วัน/เดือน/ปีเกิด เเมว</th>
          <th >น้ำหนัก (kg)</th>
          <th onClick={()=>sorting_c("petc_sex")}>เพศ</th>
          <th onClick={()=>sorting_c("petc_vaccine")}>วัคซีน</th>
          <th>บริจาคฉุกเฉิน</th>
          
          
          
        </tr>
      </thead>
      <tbody>
        {
          data_c.map((item) =>(
            <tr>
          <td>{item.hnc} </td>
          <td>{item.petc_name} </td>
          <td>{item.petc_birthday} </td>
          <td>{item.petc_weight} </td>
          <td>{item.petc_sex} </td>
          <td>{item.petc_vaccine} </td>
          <td>{item.petc_emerg} </td>
         
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
            
              <br></br>
            

	
            </div>

        </div>
        );

}

export default Owner_Profile;