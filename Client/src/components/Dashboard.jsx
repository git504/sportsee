import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Redirect, Navigate } from "react-router-dom";

// Components
import HeaderDashboard from "./HeaderDashboard";

// Class Js
import User from "../class/User";

// CSS
import { StyledDashboard } from "./styles/Dashboard.styled";

function Dashboard() {
  let { userId } = useParams();
  const [tokenId, settokenId] = useState();
  const [getUserById, setgetUserById] = useState({});
  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSession, setgetUserAverageSession] = useState({});
  const [getUserPerformance, setgetUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    settokenId(token);
    const fetch = async () => {
      const userData = await axios
        .get(`http://localhost:1234/user/${userId}`)
        .then((response) => {
          return response.data;
        })
        .then((user) => {
          console.log(user.data);
          return user.data;
        });

      const activity = await axios
        .get(`http://localhost:1234/user/${userId}/activity`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      const averageSessions = await axios
        .get(`http://localhost:1234/user/${userId}/average-sessions`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      const performance = await axios
        .get(`http://localhost:1234/user/${userId}/performance`)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });

      setgetUserById(userData);
      setgetUserActivityById(activity);
      setgetUserAverageSession(averageSessions);
      setgetUserPerformance(performance);
      setIsLoading(false);
    };
    fetch();
  }, [userId]);

  const USER_INFOS = !isLoading
    ? new User(
        getUserById.userInfos.firstName,
        getUserById.userInfos.lastName,
        getUserById.userInfos.age,
        getUserById.score ? getUserById.score : getUserById.todayScore,
        getUserById.keyData.calorieCount,
        getUserById.keyData.proteinCount,
        getUserById.keyData.carbohydrateCount,
        getUserById.keyData.lipidCount
      )
    : "";

  return (
    <StyledDashboard className="user">
      {userId === tokenId ? (
        isLoading ? (
          <p>Wait and sportSee... 😎</p>
        ) : (
          <>{<HeaderDashboard first={USER_INFOS.firstName} />}</>
        )
      ) : (
        ((<Navigate to="/" />), localStorage.removeItem("accessToken"))
      )}
    </StyledDashboard>
  );
}

export default Dashboard;
