import React from "react";
import PropTypes from "prop-types";

// Recharts
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// CSS
import { StyledScore } from "./styles/Score.styled";

/**
 * @file Score, a REACT functional component mount with Recharts library
 * @see {@link https://recharts.org/} for further information.
 */

/**
 * @function RenderLegend
 * @param {object} props - the props of the chart : type, value, color
 * @description to custom the legend of the chart
 * @returns { HTMLElement }
 */
const RenderLegend = (props) => {
  const { payload } = props;
  // console.log(payload);
  return (
    <ul>
      {payload.map((payload, index) => {
        if (payload.value === "score") {
          return (
            <li key={`item-${index}`} className="score__legend">
              Score
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

/**
 * @description A component that provides a pie chart of the User's Score.
 * @property {Function} Score print out all the data visualization
 * @param {array} scoreData - the score of the user
 * @returns { HTMLElement}
 */
const Score = ({ scoreData }) => {
  // console.log(scoreData);

  return (
    <StyledScore className="score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={scoreData}
            dataKey="value"
            startAngle={210}
            endAngle={-210}
            innerRadius="70%"
            outerRadius="80%"
            cornerRadius="50%"
          >
            <Cell fill="#FF0000" stroke="#e60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>

          <Pie
            data={[{ name: "circle", value: 100 }]}
            dataKey="value"
            startAngle={210}
            endAngle={-210}
            outerRadius="70%"
            fill="white"
          />
          <Legend
            verticalAlign="top"
            content={RenderLegend}
            wrapperStyle={{ top: "10%", left: "12%" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="score__label">
        <p className="score__number">{scoreData[0].value}%</p>
        <p className="score__text">de votre objectif</p>
      </div>
    </StyledScore>
  );
};

Score.propTypes = {
  scoreData: PropTypes.array,
};

export default Score;
