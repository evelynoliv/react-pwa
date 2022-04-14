import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Users from "../Components/Users/Users";


const Router = () => {
    return(
       
            <Routes>
                    
                                
                <Route exact path="/" element={<Home/>}/> 
                <Route exact path="/about" element={<About/>}/> 
                <Route exact path="/users" element={<Users/>}/> 
                               
            </Routes>
    )
}

export default Router
