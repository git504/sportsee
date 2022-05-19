import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Api() {
  let { userId } = useParams();
  const [getUserById, setgetUserById] = useState({});
  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSession, setgetUserAverageSession] = useState({});
  const [getUserPerformance, setgetUserPerformance] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:1234/user/${userId}`).then((response) => {
      console.log(response.data);
      setgetUserById(response.data);
    });
    axios
      .get(`http://localhost:1234/user/${userId}/activity`)
      .then((response) => {
        console.log(response.data);
        setgetUserActivityById(response.data);
      });
    axios
      .get(`http://localhost:1234/user/${userId}/average-sessions`)
      .then((response) => {
        console.log(response.data);
        setgetUserAverageSession(response.data);
      });
    axios
      .get(`http://localhost:1234/user/${userId}/performance`)
      .then((response) => {
        console.log(response.data);
        setgetUserPerformance(response.data);
      });
  }, [userId]);

  return <div>API return DIV data with class mathode getter setter</div>;
}

export default Api;
