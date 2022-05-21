import React from "react";
import PropTypes from "prop-types";

// CSS
import { StyledKpi } from "./styles/Kpi.styled";

const Kpi = ({ image, value, title, color, unity }) => {
  return (
    <StyledKpi className="kpi">
      <div className="kpi__icon">
        <div className={"kpi__img kpi__img--" + color}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="kpi__text">
        <p className="kpi__value">{value + unity}</p>
        <p className="kpi__title">{title}</p>
      </div>
    </StyledKpi>
  );
};

Kpi.propTypes = {
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  unity: PropTypes.string,
};

export default Kpi;
