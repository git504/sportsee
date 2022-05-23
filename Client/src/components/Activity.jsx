import React from "react";
import PropTypes from "prop-types";

// Recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Class
import UserActivity from "../class/UserActivity";

// CSS
import { StyledActivity } from "./styles/Activity.styled";

function Activity({ userActivityData }) {
  return <StyledActivity>Activity</StyledActivity>;
}

export default Activity;
