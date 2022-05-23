import React from "react";
import PropTypes from "prop-types";

// Recharts
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Dot,
} from "recharts";

// Class
import UserAverageSession from "../class/UserAverageSession";

// CSS
import { StyledAverageSession } from "./styles/AverageSession.styled";

function AverageSession({ averageSessionsData }) {
  return <StyledAverageSession>AverageSession</StyledAverageSession>;
}

export default AverageSession;
