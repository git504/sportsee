import React from "react";
import PropTypes from "prop-types";

import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// CSS
import { StyledScore } from "./styles/Score.styled";

const Score = ({ scoreData }) => {
  console.log(scoreData);

  return (
    <StyledScore className="score">
      <p>score</p>
    </StyledScore>
  );
};

export default Score;
