import React from "react";
import Dashboard from "../components/Dashboard";

// CSS
import { StyledUserindex } from "./styles/Userindex.styled";

/**
 * @description The Dashboard REACT component
 * @property {Function} Userindex print out all the data visualization
 * @returns { HTMLElement}
 */
function Userindex() {
  return (
    <StyledUserindex className="user">
      <Dashboard />
    </StyledUserindex>
  );
}

export default Userindex;
