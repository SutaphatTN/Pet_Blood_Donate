import './App.css';  

import  Home_Student from './Home_Student';
import  Regis_Student from './Regis_Student';
import  Profile_Student from './Profile_Student';
import  Scholar_Student from './Scholar_Student';
import  Pross_Student from './Pross_Student';



import  Home_Admin from './Home_Admin';

import  Regis_Admin from './Regis_Admin';
import  Signup from './Signup';
import  Home from './Home';

import  Owner_Update from './Owner_Update';
import  Owner_Profile from './Owner_Profile';
import  Home_Owner from './Home_Owner';
import  Owner_Pet_dog from './Owner_Pet_dog';
import  Owner_Pet_cat from './Owner_Pet_cat';
import  Owner_dog_time from './Owner_dog_time';
import  Pet_infor from './Pet_infor';
import  Pet_time from './Pet_time';
import  Pet_dog_update from './Pet_dog_update';
import  Pet_cat_update from './Pet_cat_update';
import  Admin_login from './Admin_login';
import  Admin_Owner from './Admin_Owner';
import  Admin_list_owner from './Admin_list_owner';
import  Admin_list_dog from './Admin_list_dog';
import  Admin_list_cat from './Admin_list_cat';
import  Admin_list_time from './Admin_list_time';
import  Admin_add_dog from './Admin_add_dog';
import  Admin_add_cat from './Admin_add_cat';
import  Admin_add_status from './Admin_add_status';
import  Dog_update from './Dog_update';
import  Cat_update from './Cat_update';
import  Admin_view from './Admin_view';
import  Update_time from './Update_time';
import  Booking from './Booking';
import  Email from './Email';
import  Email_dog from './Email_dog';



import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return  (
  <Router>
    <div className="App">
    <div>
    
    </div>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/Home_Student' component={
              Home_Student
            } />
             <Route exact path='/Regis_Student' component={
              Regis_Student
            } />
            <Route exact path='/Profile_Student' component={
              Profile_Student
              
            } />
             <Route exact path='/Scholar_Student' component={
              Scholar_Student
              
            } />
            <Route exact path='/Pross_Student' component={
              Pross_Student
              
            } />
           
            <Route exact path='/Home_Admin' component={
              Home_Admin
              
            } />
            
            <Route exact path='/Home' component={
              Home
              
            } />
            <Route exact path='/Signup' component={
              Signup
              
            } />
            <Route exact path='/Home_Owner' component={
              Home_Owner
              
            } />
            <Route exact path='/Owner_Pet_dog' component={
              Owner_Pet_dog
              
            } />
            <Route exact path='/Owner_Pet_cat' component={
              Owner_Pet_cat
              
            } />
            <Route exact path='/Owner_dog_time' component={
              Owner_dog_time
              
            } />
            <Route exact path='/Pet_infor' component={
              Pet_infor
              
            } />
            <Route exact path='/Pet_time' component={
              Pet_time
              
            } />
            <Route exact path='/Regis_Admin' component={
              Regis_Admin
              
            } />
            <Route exact path='/Owner_Profile' component={
              Owner_Profile
              
            } />
            <Route exact path='/Owner_Update' component={
              Owner_Update
              
            } />
            <Route exact path='/Pet_dog_update/:id' component={
              Pet_dog_update
              
            } />
            <Route exact path='/Pet_cat_update/:id' component={
              Pet_cat_update
              
            } />
            <Route exact path='/Admin_login' component={
              Admin_login
              
            } />
             <Route exact path='/Admin_Owner' component={
              Admin_Owner
              
            } />
             <Route exact path='/Admin_list_owner' component={
              Admin_list_owner
              
            } />
            <Route exact path='/Admin_list_cat' component={
              Admin_list_cat
              
            } />

            <Route exact path='/Admin_list_dog' component={
              Admin_list_dog
              
            } />
            <Route exact path='/Admin_list_time' component={
              Admin_list_time
              
            } />
            <Route exact path='/Admin_add_cat' component={
              Admin_add_cat
              
            } />

            <Route exact path='/Admin_add_dog' component={
              Admin_add_dog
              
            } />
            <Route exact path='/Admin_add_status' component={
              Admin_add_status
            
            } />
             <Route exact path='/Dog_update/:id' component={
              Dog_update
            
            } />
             <Route exact path='/Cat_update/:id' component={
              Cat_update
            
            } />
            <Route exact path='/Admin_view/:id' component={
              Admin_view
            
            } />
             <Route exact path='/Update_time/:id' component={
              Update_time
            
            } />
            <Route exact path='/Booking/:id' component={
              Booking
            
            } />
             <Route exact path='/Email/:id' component={
              Email
            
            } />
             <Route exact path='/Email_dog/:id' component={
              Email_dog
            
            } />
            		
            		
            		 
            		 
            		  
            
            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
	  
    
	

export default App;
