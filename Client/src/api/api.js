import axios from "axios";
import * as MOCKED_DATA from "../__mocks__/datamocked";

// to switch between API and mocked userdata
/**
 * @description function to fetch the data from the API and switch between API and mocked user
 * @property {Function} getUser
 * @param { number } id - The Id of the user
 * @param { string } userswitch - The Id of the user
 * @param { string } uri - The Id of the user
 * @returns Object
 */
async function getURL(id, userswitch, uri) {
  if (userswitch === "user") {
    try {
      const response = await axios.get(
        `http://localhost:1234/${userswitch}/${id}/${uri}`
      );
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  } else if (userswitch === "mock") {
    switch (uri) {
      case "":
        const user = MOCKED_DATA.USER_MAIN_DATA.find(
          (user) => user.id === parseInt(id)
        );
        console.log(user);
        return user;
      case "activity":
        const userActivity = MOCKED_DATA.USER_ACTIVITY.find(
          (user) => user.userId === parseInt(id)
        );
        console.log(userActivity);
        return userActivity;
      case "average-sessions":
        const userAverageSession = MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === parseInt(id)
        );
        console.log(userAverageSession);
        return userAverageSession;
      case "performance":
        const userPerformance = MOCKED_DATA.USER_PERFORMANCE.find(
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
async function getUser(id, userswitch) {
  console.log(id, userswitch);
  return await getURL(id, userswitch, "");
  // return await getURL(id, "user", "");
}

/**
 * @description function to get user's activity report
 * @property {Function} getActivity fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getActivity(id, userswitch) {
  return await getURL(id, userswitch, "activity");
  // return await getURL(id, "user", "activity");
}

/**
 * @description function to get user's average sessions report
 * @property {Function} getAverageSessions fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getAverageSessions(id, userswitch) {
  return await getURL(id, userswitch, "average-sessions");
  // return await getURL(id, "user", "average-sessions");
}

/**
 * @description function to get User's performance report
 * @property {Function} getPerformance fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getPerformance(id, userswitch) {
  return await getURL(id, userswitch, "performance");
  // return await getURL(id, "user", "performance");
}

export { getUser, getActivity, getAverageSessions, getPerformance };
