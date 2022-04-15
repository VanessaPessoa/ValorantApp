import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import ModoJogo from "../modules/home/views";


function MyRotes(){

   return(
    <Router>
    <Routes>
      <Route path="/" element={<ModoJogo/>} exact />
    </Routes>
  </Router>
   )
}

export default MyRotes;