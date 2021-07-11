let container = document.getElementById("shows");

let key = "676f372d-598c-40fe-b139-0c0b8bab9f4";

// API Call to Display Shows Data
axios
  .get(
    `https://project-1-api.herokuapp.com/showdates/?api_key="676f372d-598c-40fe-b139-0c0b8bab9f4"`
  )
  .then((response) => {
    let concerts = response.data;
    displayShows(concerts);
    timeConversion(concerts);
  });

// DOM Manipulation to Diplay Comments on Page
let displayShows = function (concerts) {
  concerts.forEach((element) => {
    let dateTitle = document.createElement("p");
    let createDiv = document.createElement("div");
    createDiv.classList.add("shows__info");
    dateTitle.classList.add("shows__title");
    dateTitle.innerText = "DATE";
    container.appendChild(createDiv);
    createDiv.appendChild(dateTitle);
    let date = document.createElement("p");
    let timestamp = element.date;
    date.innerText = timeConversion(timestamp);
    date.classList.add("shows__date");
    createDiv.appendChild(date);
    let venueTitle = document.createElement("p");
    venueTitle.classList.add("shows__title");
    venueTitle.innerText = "VENUE";
    createDiv.appendChild(venueTitle);
    let venue = document.createElement("p");
    venue.innerText = element.place;
    venue.classList.add("shows__venue");
    createDiv.appendChild(venue);
    let locationTitle = document.createElement("p");
    locationTitle.classList.add("shows__title");
    locationTitle.innerText = "LOCATION";
    createDiv.appendChild(locationTitle);
    let location = document.createElement("p");
    location.classList.add("shows__location");
    location.innerText = element.location;
    createDiv.appendChild(location);
    let button = document.createElement("button");
    button.innerText = "BUY TICKETS";
    button.classList.add("shows__button");
    createDiv.appendChild(button);
  });
};

// Logic to Convert Timestamp to Date
let timeConversion = function (timestamp) {
  var months_arr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date(timestamp * 1000);
  let year = "2021";
  let month = months_arr[date.getMonth()];
  let day = date.getDate();
  let fulldate = month + " " + day + " " + year;
  return fulldate;
};
