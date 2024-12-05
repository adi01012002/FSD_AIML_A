// import React, { useEffect, useState } from "react";

// const Stopwatch = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [time, settime] = useState(0);
//   const [isvalid, setisvalid] = useState(null);

//   function handleStartStop() {
//     setIsRunning((prev) => !prev); // Fix syntax for toggling state
//   }
//   function handleRestart() {
//     settime(0);
//     setIsRunning(false);
//   }
//   useEffect(() => {
//     if (isRunning) {
//       const id = setInterval(() => {
//         settime((time) => (time + 1));
//       }, 1000);
//       setisvalid(id)
//     }
//     return () => clearInterval(isvalid);
//   },[isRunning,time]);
//   // function timeformate(){
//   //    const minutes=time/60;
//   //    const second=time%60;
//   //    return {`${minutes}":"${second}`}

//   // }

//   function timeformate() {
//     const minutes = Math.floor(time / 60); // Get the integer part of minutes
//     const seconds = time % 60; // Get the remaining seconds
//     // Format minutes and seconds to always have 2 digits
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   }
  

//   return (
//     <div>
//       <h1>Stop Watch App</h1>
//       <h1>{timeformate(time)}</h1>
//       <p>Status: {isRunning ? "Running" : "Stopped"}</p> {/* Display status */}
//       <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
//       <button onClick={handleRestart}>Restart</button>
//     </div>
//   );
// };

// export default Stopwatch;


import React, { useEffect } from 'react'
import {useState} from 'react'
const Stopwatch = () => {
    const [isRunning,setIsRunning]=useState(false)
    const [time, setTime] = useState(0);
    const [isValid, setIsValid] = useState(null);
    function handleStartStop(){
        setIsRunning((pre)=>!pre)
    }
    function handleRestart(){
        setTime(0);
        setIsRunning(false);
    }
    useEffect(()=>{
      if( isRunning == true){
       const id = setInterval(()=>{
          setTime((pre)=>(time+1))
        },1000)
        setIsValid(id)
      }
      return ()=>clearInterval(isValid)
    },[isRunning,time])
    function timeFormat(time){
      const hours = Math.floor(time/3600)
      const minutes = Math.floor((time/3600)/60);
      const seconds = time%60;
      return `${hours}:${minutes}:${seconds}`
    }
  return (
    <div>
      <h1>StopWatch App</h1>
      <h1>{timeFormat(time)}</h1>
      <button onClick={handleStartStop}>{isRunning? 'Stop':'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  )
}

export default Stopwatch
