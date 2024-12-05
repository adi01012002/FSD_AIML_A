import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './component/Home.jsx';
import Counter from "./component/Counter.jsx";
import Stopwatch from "./component/Stopwatch.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
      </Routes>
    </div>
  );
};

export default App;
// export {App}
