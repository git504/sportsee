//@ts-check

// PROPS
import React from "react";

// CSS
import { StyledSidebar } from "./styles/Sidebar.styled";

// DESIGN

/**
 * @file LogoSidebar
 * @author OPENCLASSROOMS
 */
import LogoSidebar from "./LogoSidebar";

/**
 * @file yoga.svg
 */
import yoga from "../design/yoga.svg";
/**
 * @file swimmer.svg
 */
import natation from "../design/swimmer.svg";
/**
 * @file biker.svg
 */
import velo from "../design/biker.svg";
/**
 * @file dumbbell.svg
 */
import alter from "../design/dumbbell.svg";

/**
 * get CURRENT YEAR in the sidebar
 * @type {number}
 */
const YEAR = new Date().getFullYear();

const Sidebar = () => {
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
