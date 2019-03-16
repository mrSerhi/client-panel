import React from "react";

// components
import Clients from "../Clients/Clients";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-sm-10">
        <Clients />
      </div>
      <div className="col-sm-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
