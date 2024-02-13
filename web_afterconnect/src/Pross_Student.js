import Card from 'react-bootstrap/Card'
import * as ReactBootStrap from "react-bootstrap";
import { Button} from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import Regis_Student from './Regis_Student';
import Scholar_Student from './Scholar_Student';
import Profile_Student from './Profile_Student';
import  Home_Student from './Home_Student';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Pross_Student(){

	return ( 
	<div>
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
    <Link to="/Home_Student">
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
    
    <ReactBootStrap.NavDropdown.Item > <Link to ="Profile_Student">ข้อมูลนักศึกษา </Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">ข้อมูลทุนการเลือกทุนการศึกษา</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
    <Link to="/Regis_Student">
    <ReactBootStrap.Nav.Link href="#deets">กรอกข้อมูล</ReactBootStrap.Nav.Link>
    </Link>
      <Link to="/Scholar_Student">
    <ReactBootStrap.Nav.Link href="#deets">เลือกทุนการศึกษา</ReactBootStrap.Nav.Link>
    </Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
    </ReactBootStrap.Nav>
    <div className = "name">6210210499 มนสิชา เพชรนุ้ย  
   </div>
    &nbsp;&nbsp;&nbsp;
    <Link to="/pricing">
    <Button variant="outline-light">Signout</Button>{' '}
    </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
            
            <Route path="/Regis_Student" component={Regis_Student} />
            <Route path="/Scholar_Student" component={Scholar_Student} />
            <Route path="/Profile_Student" component={Profile_Student} />
            <Route path="/Home_Student" component={Home_Student} />
            
          </Switch>
</div>
<br></br>
<br></br>
<div>
<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลการเลือกทุนการศึกษา</Card.Header>
             <Card.Body>
<div className = "kh2">
<label>ทุนขาดเเคลนทุนทัพย์  &nbsp;&nbsp;&nbsp; สถานะ: ยังไม่ได้รับการยืนยัน</label>
<label>ทุนจากผู้บริจาคเงินเข้ากองทุนคณะวิทยาศาสตร์ &nbsp;&nbsp;&nbsp;สถานะ: ยังไม่ได้รับการยืนยัน</label>
</div>
	</Card.Body>
            </Card>
</div>
	
	</div>);
	
}

export default Pross_Student;