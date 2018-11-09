import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <h1>Sidebar</h1>
      <Link to="/admin">DashBoard</Link>
    </div>
  );
}

export default SideBar;
