import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import CreateNewEvent from './CreateNewEvent';
import Home from '../../components/Home';

export const RouteScreen = () => {
  
    return (
      <>
      {/* Route TO different paths */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createNewEvent" element={<CreateNewEvent/>} />
          </Routes>  
          </>
  )
}

export default RouteScreen