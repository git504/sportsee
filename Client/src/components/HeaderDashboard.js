import React from "react";
import PropTypes from "prop-types";

// CSS
import { StyledHeaderDashboard } from "./styles/HeaderDashboard.styled";

/**
 * @function HeaderDashboard
 * @description Show the header of the dashboard and return the user name
 * @param { String } firstname - the firstname of the user
 * @returns { HTMLElement }
 */
const HeaderDashboard = ({ first }) => {
  return (
    <StyledHeaderDashboard className="dashboardHeader">
      <h1 className="dashboardHeader__title">
        Bonjour
        <span className="dashboardHeader__name">{" " + first}</span>
      </h1>
      <p className="dashboardHeader__text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </StyledHeaderDashboard>
  );
};

HeaderDashboard.propTypes = {
  first: PropTypes.string.isRequired,
};

export default HeaderDashboard;
