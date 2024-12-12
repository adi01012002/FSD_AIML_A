import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
const Dashboard = (regData) => {
  return (
    <div>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>
        <div>
          <h1>{regData.email}</h1>
        </div>
      </nav>
      <div>
        <h1>{regData.name}</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
