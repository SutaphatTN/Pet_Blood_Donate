import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import './Total.css';  
import Regis_Student from './Regis_Student';
import pic from './Picture/113.png';
import Profile_Student from './Profile_Student';
import Pross_Student from './Pross_Student';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import  Home_Student from './Home_Student';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Scholar_Student() {

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
    <Link to="/Home_Student">
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
    <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Profile_Student">ข้อมูลนักศึกษา </Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Pross_Student">ข้อมูลทุนการเลือกทุนการศึกษา</Link></ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
    <Link to="/Regis_Student">
    <ReactBootStrap.Nav.Link href="#deets">กรอกข้อมูล</ReactBootStrap.Nav.Link>
    </Link>
      <Link>
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
            <Route path="/Pross_Student" component={Pross_Student} />
            <Route path="/Home_Student" component={Home_Student} />
            
            
          </Switch>
</div>
<br></br>
<br></br>

              
          <Card style={{ width: '40rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">เลือกทุนการศึกษา</Card.Header>
             <Card.Body>
             <Form.Text className="text-muted" className = "kh2">
             สามารถเลือกได้มากกว่า 1 ทุน
            </Form.Text>
            <br></br>
             <Form.Group>
             <Col sm={10}>
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนขาดเเคลนทุนทัพย์"
          name="formHorizontalRadios"
    
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนทำงานเเลกเปลี่ยน (ทุนเเสริมทักษะการทำงาน)"
          name="formHorizontalRadios"
         
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนจากผู้บริจาคเงินเข้ากองทุนคณะวิทยาศาสตร์ "
          name="formHorizontalRadios"
          
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนอาหารกลางวัน "
          name="formHorizontalRadios"
          
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนนักธุรกิจรุ่นเยาว์ "
          name="formHorizontalRadios"
          
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนนักกิจกรรมตัวอย่าง "
          name="formHorizontalRadios"
          
        />
        <Form.Check className = "kh2"
          type="checkbox"
          label="ทุนฉุกเฉิน "
          name="formHorizontalRadios"
          
        />
      </Col>
      <Button type="submit">Submit</Button>
    </Form.Group>

            </Card.Body>
            </Card>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                
                </div>



        
        );

}

export default Scholar_Student;