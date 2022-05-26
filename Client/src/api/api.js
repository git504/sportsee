import axios from "axios";

/**
 * @description function to get user's details
 * @property {Function} getUser fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getUser(id) {
  try {
    const response = await axios.get(`http://localhost:1234/user/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description function to get user's activity report
 * @property {Function} getActivity fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getActivity(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/activity`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description function to get user's average sessions report
 * @property {Function} getAverageSessions fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getAverageSessions(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/average-sessions`
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @description function to get User's performance report
 * @property {Function} getPerformance fetch the data from the API
 * @param { string } id - The Id of the user
 * @returns Object
 */
async function getPerformance(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/performance`
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getUser, getActivity, getAverageSessions, getPerformance };
