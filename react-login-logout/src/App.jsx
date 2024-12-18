// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { useState } from "react";
import Dashboard from "./Component/Dashboard";
const App = () => {
  const[regData,setregData]=useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login regData={regData}/>}></Route>
        <Route path="/register" element={<Register setregData={setregData}/>}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard regData={regData} /> }></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="*" element={<h1>No Page</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
