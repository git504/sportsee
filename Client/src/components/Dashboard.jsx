import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

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
  const [userStatus, setuserStatus] = useState();

  useEffect(() => {
    const fetch = async () => {
      const userData = await axios
        .get(`http://localhost:1234/user/${id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.status);
            setuserStatus(true);
            return response;
          } else if (response.status !== 200) {
            console.log(response.status);
            setuserStatus(false);
          }
        });

      const activity = await axios
        .get(`http://localhost:1234/user/${id}/activity`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      const averageSessions = await axios
        .get(`http://localhost:1234/user/${id}/average-sessions`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      const performance = await axios
        .get(`http://localhost:1234/user/${id}/performance`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      setgetUserById(userData.data);
      setgetUserActivityById(activity);
      setgetUserAverageSession(averageSessions);
      setgetUserPerformance(performance);
      setIsLoading(false);
    };
    fetch();
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
      ) : userStatus && tokenId === id ? (
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
