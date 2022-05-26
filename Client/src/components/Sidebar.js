// PROPS
import React from "react";

// CSS
import { StyledSidebar } from "./styles/Sidebar.styled";

// DESIGN
import LogoSidebar from "./LogoSidebar";
import yoga from "../design/yoga.svg";
import natation from "../design/swimmer.svg";
import velo from "../design/biker.svg";
import alter from "../design/dumbbell.svg";

/**
 * @description The Component that show the Sidebar nav
 * @property {Function} Sidebar nav by activitie
 * @returns { HTMLElement}
 */
const Sidebar = () => {
  const YEAR = new Date().getFullYear();
  return (
    <StyledSidebar className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__icons">
          <LogoSidebar image={yoga} />
          <LogoSidebar image={velo} />
          <LogoSidebar image={natation} />
          <LogoSidebar image={alter} />
        </ul>
      </nav>
      <p className="sidebar__text">&copy;{"SportSee " + YEAR}</p>
    </StyledSidebar>
  );
};

export default Sidebar;
