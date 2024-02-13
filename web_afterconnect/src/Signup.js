import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
//import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
//import Scholar_Student from './Scholar_Student';
import  Home from './Home';
import './Total.css';  
//import axios, { post } from 'axios';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import axios from 'axios';
//import Profile_Student from './Profile_Student';
import React, { useState, useEffect } from 'react';
 
function Signup() {

    const [own_title_error, setTitleError] = useState(null);
    const [own_fname_error, setFirstnameError] = useState(null);
    const [own_lname_error, setLastnameError] = useState(null);
    const [own_idcard_error, setIdcardError] = useState(null);
    const [own_address_error, setAddressError] = useState(null);
    const [own_email_error, setEmailError] = useState(null);
    const [own_phone_error, setPhoneError] = useState(null);
    const [own_username_error, setUsernameError] = useState(null);
    const [own_password_error, setPasswordError] = useState(null);

    const [isSuccess, setIsSuccess] = useState(false);
    const [isPass, setIsPass] = useState(false); 

    const [own_title, setTitle] = useState("");
    const [own_fname, setFirstname] = useState("");
    const [own_lname, setLastname] = useState("");
    const [own_idcard, setIdcard] = useState("");
    const [own_address, setAddress] = useState("");
    const [own_email, setEmail] = useState("");
    const [own_phone, setPhone] = useState("");
    const [own_username, setUsername] = useState("");
    const [own_password, setPassword] = useState("");

    
/* useEffect(() => {
  
        // we want to skip validation on first render
        if (firstRender.current) {
          firstRender.current = false
          return
        }
    
        // here we can disable/enable the save button by wrapping the setState function
        // in a call to the validation function which returns true/false
        setDisabled(formValidation())
        
      }, [std_name])*/



      function sendSignup(){

      
      
        
        if (own_title === "" ) {
          setTitleError(<h6 className = "kh5">·กรุณาเลือกคำนำหน้า</h6>)   
        } else {
          setTitleError(null) 
        }
        //คำนำหน้า
        if (own_fname === "") {
          setFirstnameError(<h6 className = "kh5">·กรุณากรอกชื่อจริง</h6>)
          } else {
          setFirstnameError(null)  
          }
          //นามสกุล
          if (own_lname === "") {
            setLastnameError(<h6 className = "kh5">·กรุณากรอกนามสกุล</h6>)
          }else {
          setLastnameError(null)
         
          }
          if (own_idcard === "") {
            setIdcardError(<h6 className = "kh5">·กรุณากรอกรหัสบัตรประจำตัวประชาชน</h6>)
          }
          if (own_idcard.length < 13 ) {
            setIdcardError(<h6 className = "kh5">·กรุณากรอกรหัสบัตรประจำตัวประชาชนให้ครบ 13 หลัก</h6>)
          } 
          else {
            setIdcardError(null)
         
          }
          if (own_idcard.length < 13 ) {
            setIdcardError(<h6 className = "kh5">·กรุณากรอกรหัสบัตรประจำตัวประชาชนให้ครบ 13 หลัก</h6>)
          } 
          
          else {
            setIdcardError(null)
         
          }
          if (own_address === "" ) {
            setAddressError(<h6 className = "kh5">·กรุณาที่อยู๋</h6>)
          }
          else {
          setAddressError(null)
          }
          if (own_email === "" ) {
             setEmailError(<h6 className = "kh5">·กรุณากรอกEmail</h6>)
          } else {
            setEmailError(null)
         
          }
          if (own_phone === "" ) {
            setPhoneError(<h6 className = "kh5">·กรุณากรอกหมายเลขโทรศัพท์</h6>)
         } else {
          setPhoneError(null)
         }
          
          //user & password
          if ( own_username === "" ) {
            setUsernameError(<h6 className = "kh5">·กรุณากรอก Username</h6>)
          } else {
          setUsernameError(null)
          }
          if ( own_password === "" ) {
            setPasswordError(<h6 className = "kh5">·กรุณากรอก Password</h6>)
          } else {
          setPasswordError(null)
          }
          
          {
            const url = 'http://localhost/api/v4/add_owner';
            const formData = new FormData();
            //formData.append('file',file)
            formData.append('own_title',own_title)
            formData.append('own_fname',own_fname)
            formData.append('own_lname',own_lname)
            formData.append('own_idcard',own_idcard)
            formData.append('own_address',own_address)
            formData.append('own_email',own_email)
            formData.append('own_phone',own_phone)
            formData.append('own_username',own_username)
            formData.append('own_password',own_password)
            
      
      
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
    <Link to="/Home">
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Profile_Student">เเนะนำการบริจาคเลือดของสัตว์</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pross_Student">บทความเกี่ยวกับสัตว์เลี้ยง</Link></ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Item ><Link to ="Pross_Student">ข้อมูลโรงพยาบาล</Link></ReactBootStrap.NavDropdown.Item>

        </ReactBootStrap.NavDropdown>
        <Link >
    <ReactBootStrap.Nav.Link >เกี่ยวกับเรา</ReactBootStrap.Nav.Link>
    </Link>
      <Link >
    <ReactBootStrap.Nav.Link >ติดต่อสอบถาม</ReactBootStrap.Nav.Link>
    </Link>
 
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav>
  
  </ReactBootStrap.Nav>
  
</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
          
          
  <Route path="/Home" component={Home} /> 
 
   
          
        </Switch>
</div>
<br></br>
<br></br>

<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลเจ้าของสัตว์เลี้ยง</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลส่วนตัว</Form.Label></Form.Row>
             <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                คำนำหน้า
            </Form.Label>
            <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                value = {own_title} onChange={(e)=>{setTitle(e.target.value)}}
                custom defaultValue="เลือก...">
                <option value=""></option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
            </Form.Control>
                
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ" value={own_fname} onChange={(e)=>{setFirstname(e.target.value)}}/>
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label  > นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="นามสกุล" value={own_lname} onChange={(e)=>{setLastname(e.target.value)}}/>
                </Form.Group>

               
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > รหัสบัตรประจำตัวประชาชน</Form.Label>
                <Form.Control type="text" placeholder="รหัสบัตรประจำตัวประชาชน" value={own_idcard} onChange={(e)=>{setIdcard(e.target.value)}} />
                <Form.Text id="passwordHelpInline" muted>
                รหัสบัตรประจำตัวประชาชน 13 หลัก
                  </Form.Text>
                </Form.Group>
                
            </Form.Row>
           
            
            
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เบอร์โทรศัพท์ที่สามารถติดต่อได้</Form.Label>
                <Form.Control type="text" placeholder="เบอร์โทรศัพท์" value={own_phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <Form.Text id="passwordHelpInline" muted>
                (กรอกโดยไม่ต้องใส่ - หรือ เว้นวรรค เช่น 0900001111 )
                  </Form.Text>
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={own_email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </Form.Group>
            
            </Form.Row>
        
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ที่อยุ่ปัจจุบัน</Form.Label>
                <Form.Text id="passwordHelpInline" muted>
                (เช่น หอพักในมหาวิทยาลัย ชื่อหอพัก 10 เลขที่ห้องพัก 1011)(หอพักภายนอก ชื่อหอพัก บ้านสาริตา เลขที่ห้องพัก 100
                เลขที่ 34/8 หมู่ 6 ซอยทุ่งรี อ.หาดใหญ์ จ.สงขลา )
                  </Form.Text>
                  <Form.Control as="textarea" rows={3} value={own_address} onChange={(e)=>{setAddress(e.target.value)}}/>                <br></br>

            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={own_username} onChange={(e)=>{setUsername(e.target.value)}}/>
                
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Password</Form.Label>
                <Form.Control type="text" placeholder="Password" value={own_password} onChange={(e)=>{setPassword(e.target.value)}}/>
                
                </Form.Group>
                </Form.Row>

                <br></br>
      { own_title_error && <p>{own_title_error}</p> }
      { own_fname_error && <p>{own_fname_error}</p> }
      { own_lname_error && <p>{own_lname_error}</p> }
      { own_idcard_error && <p>{own_idcard_error}</p> }
      { own_address_error && <p>{own_address_error}</p> }
      { own_email_error && <p>{own_email_error}</p> }
      { own_phone_error && <p>{own_phone_error}</p> }
      { own_username_error && <p>{own_username_error}</p> }
      { own_password_error && <p>{own_password_error}</p> }
      

      <Form.Check
        className = "kh2"
        type="checkbox"
        id="disabledFieldsetCheck"
        label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
    </Form.Group>
    <Button onClick={()=>sendSignup()}>Submit</Button>
    {isSuccess && <Redirect to="/Home" /> }
    </Form>

</Card.Body>
</Card>
     
    


<br></br>
<br></br>
<br></br>


</div>

      
      );

}

export default Signup;