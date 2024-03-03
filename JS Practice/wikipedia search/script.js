// https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=

const results = document.getElementById("resultData");
const cardData = document.getElementById("card-data");
const imgBlock = document.getElementById("img-block");
const imageInfo = document.getElementById("image-info");
const rocketImage = document.getElementById("rocketimg");
const flightNumber = document.getElementById("flightNumber");
const launchYear = document.getElementById("launchYear");
const missionName = document.getElementById("missionName");

export default function fetchData() {
  const url = "https://api.spaceXdata.com/v3/launches?limit=100";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // results.innerHTML = `${data.launch_year}`;
      // data.forEach((launch) => {
      //   results.innerHTML += `<p>${launch.launch_year}</p>`;
      // });
      data.forEach((item) => {
        if (item.links && item.links.mission_patch_small) {
          const imgElem = document.createElement("img");
          imgElem.src = item.links.mission_patch_small;
          imgBlock.appendChild(imgElem);
        }
      });
    });
}
fetchData();


