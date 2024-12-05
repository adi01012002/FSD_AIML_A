import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/counter">Counter App</Link></li>
        <li><Link to="/stopwatch">Stop Watch</Link></li>
      </ul>
    </div>
  );
}

export default Home;
