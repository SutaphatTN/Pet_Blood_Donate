import Carousel from 'react-bootstrap/Carousel'
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './Total.css';  
import pic from './Picture/113.png';
import pic1 from './Picture/1.jpg';
import pic2 from './Picture/2.jpg';
import pic3 from './Picture/3.jpg';
import table from './Picture/table.jpg';
import cat_dog from './Picture/cat_dog.jpeg';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Home_Owner from './Home_Owner';
import Admin_login from './Admin_login';
import Regis_Admin from './Regis_Admin';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import axios from 'axios';
  import { useState, useEffect } from 'react';

function Home() {
  const [own_username, setUsername] = useState("");
	const [own_password, setPassword] = useState("");
	const [isLoggedInToMember, setIsLoggedInToMember] = useState(false);

	
	useEffect (()=>{
		//UseEffect จะทำงานเมื่อ Component ถูกโหลดมาตอนครั้งแรก
		//เราจะใช้ Check ว่า User Login ไว้หรือยัง  ถ้ายัง ให้ Login แต่ถ้า Login แล้ว ให้วิ่งไปหน้า Member Area เลย
		//alert(sessionStorage.getItem('api_token')==null);
		
		if (sessionStorage.getItem('user_api_token')!=null) {
			
		}
	
	}, []);
	
	function sendLogin(){	
   
			axios.post('http://localhost/api/v4/login_owner',
				{
					"own_username" : own_username,
					"own_password" : own_password,
        
				}
			).then (
				res=> {				
					if (res.data.status=="Success"){
						//SessionStorage เป็นคำสั่งมาตารฐานของ Javascript สำหรับการเก็บข้อมูลใดๆที่ใช้ชั่วคราว กรณีนี้เราใช้ Session Storage เก็บ api_token					
			
							setIsLoggedInToMember(true);
							sessionStorage.setItem('user_api_token', res.data.token);
					
						
					}else {
						alert ("ล็อคอินไม่สำเร็จ");
					}
				}
			);	
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
    <Link >
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
        <Link >
        
    <ReactBootStrap.Nav.Link href = "http://hospital.vet.psu.ac.th">ข้อมูลโรงพยาบาล</ReactBootStrap.Nav.Link>
    </Link>
      <Link >
    <ReactBootStrap.Nav.Link ></ReactBootStrap.Nav.Link>
    </Link>
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.NavDropdown title="Admin" id="collasible-nav-dropdown">
    
        <ReactBootStrap.NavDropdown.Item > <Link to ="Regis_Admin">SignUp</Link></ReactBootStrap.NavDropdown.Item>
     
        <ReactBootStrap.NavDropdown.Item ><Link to ="Admin_login">Login</Link></ReactBootStrap.NavDropdown.Item>

        </ReactBootStrap.NavDropdown>
        <ReactBootStrap.Nav.Link >  &nbsp;&nbsp;&nbsp;&nbsp;
        </ReactBootStrap.Nav.Link>
    
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<Switch>
            
            
           
           
            
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
<div>
<Card  className="c1" style={{ width: '22rem', marginLeft: '75vw', marginTop: '-35vh ' }}>
  <Card.Body>
    <Card.Title className = "kh2">Login</Card.Title>
    <Form className = "kh2">
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group>

  <Button variant="primary" onClick={()=>{sendLogin()}}>
    Submit 
  </Button> 
  <Card.Body>
  <Card.Text className = "c1">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not a member?&nbsp;&nbsp;&nbsp;
<Link to ="SignUp">SignUp</Link>
{isLoggedInToMember && <Redirect to="/Home_Owner" /> }
      
  </Card.Text>
  <label></label>
  
  </Card.Body>
</Form>
 
  </Card.Body>
</Card>
<Switch>
            
            <Route path="/Home_Owner" component={Home_Owner} />
            <Route path="/Admin_login" component={Admin_login} />
          
            
            
            
          </Switch>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <div>
          <Card border="light" style={{ width: '80rem', marginLeft: '17vw', marginTop: '0.05vh '}}>
      <Card.Body> 
        <h3>เว็บไซด์ลงทะเบียนบริจาคเลือดสำหรับสัตวประเภทสุนัขเเละเเมว</h3><br></br><br></br>
           ปัจจุบันพบปัญหาสัตว์ป่วยวิกฤตมากมาย เช่น อุบัติเหตุที่เสียเลือดมาก การผ่าตัดใหญ่ที่เสียเลือดมาก หรือโรคพยาธิเม็ดเลือดที่รุนแรง ที่จำเป็นต้องได้รับการถ่ายเลือดอย่างฉุกเฉินเพื่อที่จะสามารถมีชีวิตต่อไปได้ แต่เจ้าของสัตว์ป่วยเหล่านั้นไม่รู้ว่าจะไปหาเลือดมาจากที่ไหน ติดต่ออย่างไร ต้องใช้เลือดเท่าไหร่ ทางโรงพยาบาลสัตว์ไอเว็ทจึงก่อตั้งหน่วยธนาคารเลือดเพื่อเป็นตัวกลางประสานงานและรับบริจาคเลือด ดำเนินการถ่ายเลือด ดูแลหลังการถ่ายเลือด พร้อมรับสมัครสมาชิกสุนัขและแมวเข้าโครงการ หากทางโรงพยาบาลสัตว์ต้องการใช้เลือดจะติดต่อไปยังท่านเจ้าของสัตว์เลี้ยงเพื่อขอรับสุนัขหรือแมวที่ลงชื่อสมัครไว้มาบริจาคเลือดได้ทันท่วงที "เลือดที่เก็บมาได้ เอาไปทำอะไรได้บ้าง”
<br></br><br></br>
โดยปกติแล้ว “เลือด” จะประกอบด้วยองค์ประกอบหลายอย่าง ไม่ว่าจะเป็นเม็ดเลือดแดง เม็ดเลือดขาว เกล็ดเลือด น้ำเลือด โปรตีนในเลือด รวมทั้งปัจจัยการแข็งตัวของเลือดอีกหลายชนิด ซึ่งในการป่วยของสุนัข แต่ละตัว ก็จะมีความต้องการองค์ประกอบเหล่านี้แตกต่างกันไป เช่น ถ้ามีปัญหาโลหิตจาง อาจจะต้องการแค่เม็ดเลือดแดง แต่ถ้าโปรตีนต่ำ จะต้องการแค่โปรตีนในเลือด เป็นต้น</Card.Body>
    </Card>
    <img
      className="d7"
      src={cat_dog}
      alt="Second slide"
    />
    <Card border="light" style={{ width: '70rem', marginLeft: '20vw', marginTop: '0.05vh '}}>
      <Card.Body className = "kh2"> 
      <h4>คุณสมบัติของสุนัขและแมวที่บริจาคเลือด</h4><br></br>

1. มีสุขภาพสมบูรณ์แข็งแรง<br></br>

2. อายุระหว่าง1 - 7 ปี ไม่จำกัดเพศ พันธุ์(ถ้าเป็นเพศเมียต้องรอให้หมดประจำเดือนก่อน)<br></br>

3. สุนัขมีน้ำหนักไม่น้อยกว่า17 กิโลกรัม แมวมีน้ำหนักไม่ต่ำกว่า 4 กิโลกรัม.<br></br>

4. ได้รับการฉีดวัคซีนประจำปีครบถ้วนควบคุมป้องกันเห็บ หมัด และพยาธิหนอนหัวใจอย่างต่อเนื่อง<br></br>

5. กรณีฉีดวัคซีนควรเว้นระยะอย่างน้อย3 สัปดาห์<br></br>

6. ไม่เคยรับการผ่าตัดใหญ่ในระยะ1 - 3 เดือนก่อนมาให้เลือด<br></br>

7. ไม่เคยได้รับเลือดหรือผลิตภัณฑ์เลือดใดๆมาก่อน<br></br>

8. หากเป็นเพศเมียไม่ควรอยู่ในระหว่างเป็นสัดตั้งครรภ์ หรือให้นมลูก<br></br>

9.  ไม่รับประทานยาใดๆ ในช่วง 2 สัปดาห์ก่อนหน้านี้<br></br>

10. ไม่มีบาดแผลหรือเป็นโรคผิวหนัง<br></br>

11. ลักษณะนิสัยเป็นมิตร หรือเจ้าของสามารถควบคุมได้<br></br><br></br>



<h4>การเตรียมตัวก่อนบริจาค</h4>

ควรให้สุนัขและแมวงดอาหารอย่างน้อย 8 –12 ชั่วโมง ก่อนมาบริจาคเลือด แต่สามารถดื่มน้ำได้ตามปกติ เพื่อป้องกันภาวะขาดน้ำ<br></br>

        <br></br>
        <br></br>
         <br></br>
         
<h4>ขั้นตอนการบริจาคเลือด</h4>
<br></br>
<img
      className="d8"
      src={table}
      alt="Second slide"
    />
        
        </Card.Body>
    </Card>
           
          </div>
</div>

<br></br><br></br><br></br><br></br>
<div>
  <Card border="primary" style={{ width: '55rem', marginLeft: '25vw', marginTop: '0.05vh '}}>
    <Card.Body>
    สำหรับผู้ที่สนใจนำสัตว์เลี้ยงไปบริจาคเลือด ได้ที่ธนาคารเลือด โรงพยาบาลสัตว์ มหาวิทยาลัยสงขลานครินทร์ 
<br></br>อาคารจุฬาภรณการุณยรักษ์ ถนนปุณกัณฑ์ ตำบลคอหงส์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110 โทรศัพท์ 0-7428-9607
    </Card.Body>
  </Card>
  <br></br><br></br>
  <Navbar fixed="bottom" bg="primary" variant="dark">
        
      </Navbar>
</div>
        </div>
        
        );

}

export default Home;