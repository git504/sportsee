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
        const MOCKED_USER = MOCKED_DATA.USER_MAIN_DATA.find(
          (user) => user.id === parseInt(id)
        );
        return MOCKED_USER;
      case "activity":
        const MOCKED_USER_ACTIVITY = MOCKED_DATA.USER_ACTIVITY.find(
          (user) => user.userId === parseInt(id)
        );
        return MOCKED_USER_ACTIVITY;
      case "average-sessions":
        const MOCKED_USER_AVERAGE_SESSIONS =
          MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(id)
          );
        return MOCKED_USER_AVERAGE_SESSIONS;
      case "performance":
        const MOCKED_USER_PERFORMANCE = MOCKED_DATA.USER_PERFORMANCE.find(
          (user) => user.userId === parseInt(id)
        );
        return MOCKED_USER_PERFORMANCE;
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
  return await getURL(id, userswitch, "");
}

/**
 * @description function to get user's activity report
 * @property {Function} getActivity fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getActivity(id, userswitch) {
  return await getURL(id, userswitch, "activity");
}

/**
 * @description function to get user's average sessions report
 * @property {Function} getAverageSessions fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getAverageSessions(id, userswitch) {
  return await getURL(id, userswitch, "average-sessions");
}

/**
 * @description function to get User's performance report
 * @property {Function} getPerformance fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getPerformance(id, userswitch) {
  return await getURL(id, userswitch, "performance");
}

export { getUser, getActivity, getAverageSessions, getPerformance };
