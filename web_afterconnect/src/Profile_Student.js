import Card from 'react-bootstrap/Card'
import * as ReactBootStrap from "react-bootstrap";
import { Button} from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic_pro from './Picture/123.png'
import Regis_Student from './Regis_Student';
import Scholar_Student from './Scholar_Student';
import  Home_Student from './Home_Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Profile_Student(){

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
    
        <ReactBootStrap.NavDropdown.Item > <Link>ข้อมูลนักศึกษา </Link></ReactBootStrap.NavDropdown.Item>
     
		<ReactBootStrap.NavDropdown.Item ><Link to ="Pross_Student">ข้อมูลทุนการเลือกทุนการศึกษา</Link></ReactBootStrap.NavDropdown.Item>
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
            <Route path="/Home_Student" component={Home_Student} />
            
            
          </Switch>
</div>
<br></br>
<br></br>
<div>
<Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลนักศึกษา</Card.Header>
             <Card.Body>
<img
      className="d2"
      src={pic_pro}
      alt="Second slide"
    />
	</Card.Body>
            </Card>
</div>
	
	</div>);
	
}

export default Profile_Student;