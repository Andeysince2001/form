import React from 'react'
import { Link } from "react-router-dom";
import './styles/RouterScreen.css'
import createLogo from './img/1.png';
import manageLogo from './img/3.png';
import notify from './img/2.png' ;
import newUser from './img/4.png';

const Home = () => {
    return (
        <div>
        <h1 className='head'> Welcome To AAP Volunteers Dashboard</h1>

{/* Links To different pages */}

      <Link className='new-event1' to="/createNewEvent">
        <div>
        <h1>Create New Event</h1>
        <p>Welcome back, you can create new event</p>
        </div>
        <img src={createLogo} alt="" />
      </Link>
      <Link className='new-event2' to="/managesUpdate">
      <div><h1>Manage Updates</h1></div>
      <img src={manageLogo} alt="" />      
      </Link>
      <Link className='new-event3' to="/sendNotification">
        <div>
          <h1>Send Notification</h1>
       </div>
       <img src={notify} alt="" />      
      </Link>
      <Link className='new-event4' to="/newUser">
        <div>
          <h1>Register New User</h1>
       </div>
       <img src={newUser} alt="" />      
      </Link>
        </div>
    )
}

export default Home
