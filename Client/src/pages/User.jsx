import React from "react";
import Dashboard from "../components/Dashboard";

// CSS
import { StyledUser } from "./styles/User.styled";

function User() {
  return (
    <StyledUser className="user">
      <Dashboard />
    </StyledUser>
  );
}

export default User;
