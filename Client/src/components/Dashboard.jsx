import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

// Data
import {
  getUser,
  getActivity,
  getAverageSessions,
  getPerformance,
} from "../api/api";

// Components
import HeaderDashboard from "./HeaderDashboard";
import Kpi from "./Kpi";
import Score from "./Score";
import Performance from "./Performance";
import AverageSession from "./AverageSession";
import Activity from "./Activity";

// Class Js
import User from "../class/User";

// CSS
import { StyledDashboard } from "./styles/Dashboard.styled";
import energy from "../design/energy.svg";
import chicken from "../design/chicken.svg";
import cheeseburger from "../design/cheeseburger.svg";
import apple from "../design/apple.svg";

function Dashboard() {
  let { id } = useParams();
  // const token = localStorage.getItem("accessToken");
  const [getUserById, setgetUserById] = useState({});
  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSessionById, setgetUserAverageSessionById] = useState(
    {}
  );
  const [getUserPerformanceById, setgetUserPerformanceById] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id) => {
      const USER = await getUser(id);
      const ACTIVITY = await getActivity(id);
      const AVERAGE_SESSIONS = await getAverageSessions(id);
      const PERFORMANCE = await getPerformance(id);

      setgetUserById(USER);
      setgetUserActivityById(ACTIVITY);
      setgetUserAverageSessionById(AVERAGE_SESSIONS);
      setgetUserPerformanceById(PERFORMANCE);
      setIsLoading(false);
    };
    fetch(id);
  }, [id]);

  const USER_CLASS = !isLoading
    ? new User(
        getUserById?.data.userInfos.firstName,
        getUserById?.data.userInfos.lastName,
        getUserById?.data.userInfos.age,
        getUserById?.data.score ? getUserById.score : getUserById.todayScore,
        getUserById?.data.keyData.calorieCount,
        getUserById?.data.keyData.proteinCount,
        getUserById?.data.keyData.carbohydrateCount,
        getUserById?.data.keyData.lipidCount
      )
    : "";

  return (
    <StyledDashboard className="dashboard">
      {isLoading ? (
        <p>Wait and sportSee... 😎</p>
      ) : (
        <>
          <HeaderDashboard first={USER_CLASS.firstName} />
          <div className="dashboard__charts">
            <div className="dashboard__charts-left">
              <Activity userActivityData={getUserActivityById} />
              <AverageSession averageSessionsData={getUserAverageSessionById} />
              <Performance performanceData={getUserPerformanceById} />
              <Score scoreData={USER_CLASS.score} />
            </div>
            <div className="dashboard__charts-right">
              <Kpi
                image={energy}
                value={USER_CLASS.calorie}
                title="Calories"
                unity="kCal"
                color="red"
              />
              <Kpi
                image={chicken}
                value={USER_CLASS.protein}
                title="Proteines"
                unity="g"
                color="blue"
              />
              <Kpi
                image={apple}
                value={USER_CLASS.carbohydrate}
                title="Glucides"
                unity="g"
                color="yellow"
              />
              <Kpi
                image={cheeseburger}
                value={USER_CLASS.lipid}
                title="Lipides"
                unity="g"
                color="pink"
              />
            </div>
          </div>
        </>
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
