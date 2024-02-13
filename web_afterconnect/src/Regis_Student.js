import * as ReactBootStrap from "react-bootstrap";
import { Button , Badge } from 'react-bootstrap';
import Pross_Student from './Pross_Student';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import pic from './Picture/113.png';
import Scholar_Student from './Scholar_Student';
import  Home_Student from './Home_Student';
import './Total.css';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Profile_Student from './Profile_Student';
 
function Regis_Student(){

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
    <Link to="/Home_Student">
    <ReactBootStrap.Nav.Link href="#deets">หน้าเเรก</ReactBootStrap.Nav.Link>
    </Link>
        <ReactBootStrap.NavDropdown title="ข้อมูลทั่วไป" id="collasible-nav-dropdown">
        
            <ReactBootStrap.NavDropdown.Item > <Link to ="Profile_Student">ข้อมูลนักศึกษา </Link></ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item ><Link to ="Pross_Student">ข้อมูลทุนการเลือกทุนการศึกษา</Link></ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
    <Link >
    <ReactBootStrap.Nav.Link >กรอกข้อมูล</ReactBootStrap.Nav.Link>
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
            
           
            <Route path="/Profile_Student" component={Profile_Student} />
            <Route path="/Scholar_Student" component={Scholar_Student} />
            <Route path="/Pross_Student" component={Pross_Student} />
            <Route path="/Home_Student" component={Home_Student} />
            
          </Switch>
<br></br>
<br></br>
          <div>
              
          <Card style={{ width: '50rem', marginLeft: '6vw', marginTop: '0.05vh '}}>
             <Card.Header className = "kh1">ข้อมูลขอรับทุนการศึกษา</Card.Header>
             <Card.Body>
             <Form.Row className = "kh3"> <Form.Label  > ข้อมูลเกี่ยวกับนักศึกษา</Form.Label></Form.Row>
             <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                คำนำหน้า
            </Form.Label>
            <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom >
                <option value="0">นาย</option>
                <option value="1">นาง</option>
                <option value="2">นางสาว</option>
            
            </Form.Control>
                
            </Form>
            <Form>
            
            <Form.Row className = "kh2">
                <Form.Group as={Col} >
                <Form.Label  > ชื่อ</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ" />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label  > นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="นามสกุล" />
                </Form.Group>

               
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > รหัสนักศึกษา</Form.Label>
                <Form.Control type="text" placeholder="รหัสนักศึกษา" />
                <Form.Text id="passwordHelpInline" muted>
                  รหัสนักศึกษา 10 หลัก
                  </Form.Text>
                </Form.Group>
                
            </Form.Row>
           
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > ผลการเรียน (เกรดเฉลี่ยสะสม ณ ปัจจุบัน ไม่รวมคะเเนน O-net)</Form.Label>
                <Form.Control type="text" placeholder="GPA" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > อายุ</Form.Label>
                <Form.Control type="text" placeholder="อายุ" />
                
                </Form.Group>
            < Form.Group as={Col} >
                <Form.Label  > วัน/เดือน/ปีเกิด</Form.Label>
                <Form.Control type="Date" placeholder="วัน/เดือน/ปี" />
                <Form.Text id="passwordHelpInline" muted>
                  ตัวอย่าง 7 มกราคม 2020
                  </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Row className = "kh2">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>ภาควิชา/สาขาวิชา</Form.Label>
            <Form.Control as="select" defaultValue="เลือก...">
                <option>คณิตศาสตร์</option>
                <option>สถิติ</option>
                <option>เคมี</option>
                <option>จุลชีววิทยา</option>
                <option>ชีววิทยา</option>
                <option>ฟิสิกส์</option>
                <option>วัสดุศาสตร์</option>
                <option>พอลิเมอร์</option>
                <option>เคมี-ชีววิทยา</option>
                <option>เทคโนโลยีชีวภาพ</option>
                <option>วิทยาศาสตร์ประยุกต์</option>
                <option>วิทยาการคอมพิวเตอร์</option>
                <option>เทคโนโลยีสารสนเทศเเละการสื่อสาร(ICT)</option>
                <option>เทคโนดลยีสารสนเทศ(IT ต่อเนื่อง)</option>
                <option>ยังไม่มีสาขา</option>

            </Form.Control>
            </Form.Group>
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > ผลการเรียน (เกรดเฉลี่ยสะสม ณ ปัจจุบัน ไม่รวมคะเเนน O-net)</Form.Label>
                <Form.Control type="text" placeholder="GPA" />
                </Form.Group>
            
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เบอร์โทรศัพท์ที่สามารถติดต่อได้</Form.Label>
                <Form.Control type="text" placeholder="เบอร์โทรศัพท์" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > ID Line</Form.Label>
                <Form.Control type="text" placeholder="ID Line" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > Facebook</Form.Label>
                <Form.Control type="text" placeholder="Facebook" />
                </Form.Group>
            
            </Form.Row>
            
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "kh2">
                <Form.Label>ที่อยุ่ปัจจุบัน</Form.Label>
                <Form.Text id="passwordHelpInline" muted>
                (เช่น หอพักในมหาวิทยาลัย ชื่อหอพัก 10 เลขที่ห้องพัก 1011)(หอพักภายนอก ชื่อหอพัก บ้านสาริตา เลขที่ห้องพัก 100
                เลขที่ 34/8 หมู่ 6 ซอยทุ่งรี อ.หาดใหญ์ จ.สงขลา )
                  </Form.Text>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Row className = "kh3"> <Form.Label  > ข้อมูลเกี่ยวครอบครัว</Form.Label></Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > ชื่อ - สกุลของบิดา</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ-สกุล" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > ชื่อ - สกุลของมารดา</Form.Label>
                <Form.Control type="text" placeholder="ชื่อ-สกุล" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > มีพี่น้องกี่คน(รวมตัวเอง)</Form.Label>
                <Form.Control type="text" placeholder="เขียนเฉพาะตัวเลข" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh2">
            < Form.Group as={Col} >
                <Form.Label  > เป็นบุตรคนที่เท่าไร(รวมตัวเอง)</Form.Label>
                <Form.Control type="text" placeholder="เขียนเฉพาะตัวเลข" />
                </Form.Group>
            
            </Form.Row>
            <Form.Row className = "kh3"> <Form.Label  > เอกสารเพิ่มเติม</Form.Label></Form.Row>
                        <div className="mb-3">
                <Form.File id="formcheck-api-regular" className = "kh2">
                <Form.File.Label>หลักฐานหรือเอกสารที่ต้องเเนบ(ตั้งเป็นชื่อไฟล์นักศึกษา)</Form.File.Label>
                <Form.File.Input />
                </Form.File>
            </div>
            <br></br>
 
            <Form.Group>
      <Form.Check
        className = "kh2"
        type="checkbox"
        id="disabledFieldsetCheck"
        label="ท่านได้ตรวจสอบข้อมุลของท่านอย่างถี่ถ้วนเเล้ว"
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
            </Form>

            </Card.Body>
            </Card>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                
                </div>
    );
	
}

export default Regis_Student;