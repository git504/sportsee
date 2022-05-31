import axios from "axios";
import * as USER_DATA from "../__mocks__/datamocked";

// to switch between API and mocked userdata
async function getURL(id, switchParam, uri) {
  if (switchParam === "api") {
    try {
      const response = await axios.get(
        `http://localhost:1234/user/${id}/${uri}`
      );
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  } else if (switchParam === "mock") {
    // console.log(USER_DATA.USER_MAIN_DATA);

    switch (uri) {
      case "":
        const user = USER_DATA.USER_MAIN_DATA.find(
          (user) => user.id === parseInt(id)
        );
        console.log(user);
        return user;
      case "activity":
        const userActivity = USER_DATA.USER_ACTIVITY.find(
          (user) => user.userId === parseInt(id)
        );
        console.log(userActivity);
        return userActivity;
      case "average-sessions":
        const userAverageSession = USER_DATA.USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === parseInt(id)
        );
        console.log(userAverageSession);
        return userAverageSession;
      case "performance":
        const userPerformance = USER_DATA.USER_PERFORMANCE.find(
          (user) => user.userId === parseInt(id)
        );
        console.log(userPerformance);
        return userPerformance;
      default:
        break;
    }
  }
}

/**
 * @description function to get user's details
 * @property {Function} getUser fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getUser(id) {
  return await getURL(id, "mock", "");
  // return await getURL(id, "api", "");
}

/**
 * @description function to get user's activity report
 * @property {Function} getActivity fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getActivity(id) {
  return await getURL(id, "mock", "activity");
  // return await getURL(id, "api", "activity");
}

/**
 * @description function to get user's average sessions report
 * @property {Function} getAverageSessions fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getAverageSessions(id) {
  return await getURL(id, "mock", "average-sessions");
  // return await getURL(id, "api", "average-sessions");
}

/**
 * @description function to get User's performance report
 * @property {Function} getPerformance fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getPerformance(id) {
  return await getURL(id, "mock", "performance");
  // return await getURL(id, "api", "performance");
}

export { getUser, getActivity, getAverageSessions, getPerformance };
