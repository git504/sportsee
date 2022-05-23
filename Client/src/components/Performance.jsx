import React from "react";
import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text,
} from "recharts";

// Class
import UserPerformance from "../class/UserPerformance";

// CSS
import { StyledPerformance } from "./styles/Performance.styled";

function Performance({ performanceData }) {
  return <StyledPerformance>Performance</StyledPerformance>;
}

export default Performance;
