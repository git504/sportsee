import React from "react";
import Api from "../api/Api";

// CSS
import { StyledDashboard } from "./styles/Dashboard.styled";

function Dashboard() {
  return (
    <StyledDashboard className="user">
      <Api />
    </StyledDashboard>
  );
}

export default Dashboard;
