import axios from "axios";

async function getUser(id) {
  try {
    const response = await axios.get(`http://localhost:1234/user/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getActivity(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/activity`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAverageSessions(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/average-sessions`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getPerformance(id) {
  try {
    const response = await axios.get(
      `http://localhost:1234/user/${id}/performance`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getUser, getActivity, getAverageSessions, getPerformance };
