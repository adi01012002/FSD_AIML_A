import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import Counter from "./component/Counter.jsx";
import Stopwatch from "./component/Stopwatch.jsx";
import Refex from "./component/Refex.jsx";
import Parent from "./component/Parent.jsx"
import Reducerex from "./component/Reducerex.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
        {/* <Route path="/Refex" element={<Refex />}></Route>
         */}
      <Route path="/contextex" element={<Parent/>}></Route>
      <Route path="/Reducerex" element={<Reducerex/>}></Route>
      </Routes>
      {/* <Refex /> */}
    </div>
  );
};

export default App;
// export {App}
