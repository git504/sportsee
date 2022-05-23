import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

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
  const token = localStorage.getItem("accessToken");
  const [tokenId, settokenId] = useState(token);
  const [getUserById, setgetUserById] = useState({});
  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSession, setgetUserAverageSession] = useState({});
  const [getUserPerformance, setgetUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id) => {
      const userData = await getUser(id);
      const activity = await getActivity(id);
      const averageSessions = await getAverageSessions(id);
      const performance = await getPerformance(id);

      setgetUserById(userData.data);
      setgetUserActivityById(activity);
      setgetUserAverageSession(averageSessions);
      setgetUserPerformance(performance);
      setIsLoading(false);
    };
    fetch(id);
  }, [id]);

  const USER_INFOS = !isLoading
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
      ) : tokenId === id ? (
        <>
          <HeaderDashboard first={USER_INFOS.firstName} />
          <div className="dashboard__charts">
            <div className="dashboard__charts-left">
              <p>insertion des graphiques ici</p>
            </div>
            <div className="dashboard__charts-right">
              <Kpi
                image={energy}
                value={USER_INFOS.calorie}
                title="Calories"
                unity="kCal"
                color="red"
              />
              <Kpi
                image={chicken}
                value={USER_INFOS.protein}
                title="Proteines"
                unity="g"
                color="blue"
              />
              <Kpi
                image={apple}
                value={USER_INFOS.carbohydrate}
                title="Glucides"
                unity="g"
                color="yellow"
              />
              <Kpi
                image={cheeseburger}
                value={USER_INFOS.lipid}
                title="Lipides"
                unity="g"
                color="pink"
              />
            </div>
          </div>
        </>
      ) : (
        (localStorage.removeItem("accessToken"), (<Navigate to="/" />))
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
