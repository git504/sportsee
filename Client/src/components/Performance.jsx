import React from "react";
import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Class
import UserPerformance from "../class/UserPerformance";

// CSS
import { StyledPerformance } from "./styles/Performance.styled";

const Performance = ({ performanceData }) => {
  const PERFORMANCE = new UserPerformance(performanceData);
  console.log(performanceData);
  console.log(PERFORMANCE.performance);

  return (
    <StyledPerformance>
      {/* <ResponsiveContainer width="100%" height={250}> */}
      <RadarChart
        outerRadius={70}
        width={230}
        height={230}
        data={PERFORMANCE.performance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#ffffff", fontSize: 10 }}
          axisLine={true}
          tickLine={true}
        />

        <PolarRadiusAxis
          tickCount={6}
          domain={[0, 150]}
          axisLine={false}
          tick={false}
        />

        <Radar
          dataKey="value"
          stroke="rgba(230, 0, 0, .7)"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
      {/* </ResponsiveContainer> */}
    </StyledPerformance>
  );
};

Performance.propTypes = {
  performanceData: PropTypes.object,
};

export default Performance;
