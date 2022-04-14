import React from "react";
import { BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./Components/ResponsiveAppBar/ResponsiveAppBar";
import Router from "./Routes/Router";

function App() {
  return (
      <div>
      <ResponsiveAppBar/>
      <BrowserRouter>
      
      <Router/>
      </BrowserRouter>
      
     
 
    </div>
  );
}

export default App;
