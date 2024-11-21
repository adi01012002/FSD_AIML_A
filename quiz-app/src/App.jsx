// // import React from "react";
// // import Products from "./Products";

// // function App() {
// //   return (
// //     <div className="w-full h-screen bg-zinc-700 p-4">
// //       <div className="w-44 h-32 bg-red-600 rounded-xl p-3 text-white" >
// //         <div className=""> hello bhaiya</div>
// //       </div>
// //       <Products/>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import Products from "./Products";

// const App = () => {
//   var [a, b] = useState(10);
//   return (
//     <div className="bg-zinc-700 w-full h-screen p-4">
//       <h1>{a}</h1>
//       <button
//         onClick={() => b(a - 1)}
//         className="px-3 py-3 bg-green-100 rounded-md text-sm m-2"
//       >
//         click me !
//       </button>
//       <button
//         onDoubleClick={function fun() {
//           b(a + 1);
//         }}
//         className="bg-red-500 px-3 py-1 rounded-sm text-xs m-4"
//       >
//         Click me !
//       </button>
//     <Products name="value"  data={{age:25,name:"Aditya"}}/>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>}>Counter</Route>
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/Home" element={<Home/>}></Route> */}
      </Routes>
    </div>
  )
}

// export default App
export {App}