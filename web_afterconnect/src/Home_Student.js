import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic1 from './Picture/1.jpg';
import pic2 from './Picture/2.jpg';
import pic3 from './Picture/3.jpg';
import Regis_Student from './Regis_Student';
import Profile_Student from './Profile_Student';
import Scholar_Student from './Scholar_Student';
import Pross_Student from './Pross_Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Home_Student() {

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
    <Link >
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Profile_Student">ข้อมูลนักศึกษา </Link></ReactBootStrap.NavDropdown.Item>
     
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
            <Route path="/Profile_Student" component={Profile_Student} />
            <Route path="/Scholar_Student" component={Scholar_Student} />
            <Route path="/Pross_Student" component={Pross_Student} />
            
            
          </Switch>
</div>
<br></br>
<br></br>
<div>
<Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>


        </div>
        );

}

export default Home_Student;