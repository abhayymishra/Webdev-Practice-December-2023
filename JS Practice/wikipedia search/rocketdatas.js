import fetchData from "./script";
const flightNumber = document.getElementById("flightNumber");
const launchYear = document.getElementById("launchYear");
const missionName = document.getElementById("missionName");

fetchData.data.forEach((item) => {
    const rocketspan = document.createElement('span');
    rocketspan.textContent = item.rocket
});
