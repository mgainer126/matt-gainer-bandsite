let container = document.getElementById("shows");
console.log(container);

let concerts = [
  {
    dateTitle: "DATES",
    date: "Mon Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Tues Sept 21 2021",
    venueTitle: "VENUE",
    venue: "Pier 3 East",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Fri Oct 15 2021",
    venueTitle: "VENUE",
    venue: "View Lounge",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Sat Nov 06 2021",
    venueTitle: "VENUE",
    venue: "Hyatt Agency",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Fri Nov 26 2021",
    venueTitle: "VENUE",
    venue: "Moscow Center",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Wed Oct 15 2021",
    venueTitle: "VENUE",
    venue: "Press Club",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

console.log(concerts);
// Create Element

concerts.forEach((element) => {
  let dateTitle = document.createElement("p");
  let createDiv = document.createElement("div");
  createDiv.classList.add("shows__info");
  dateTitle.classList.add("shows__title");
  dateTitle.innerText = element.dateTitle;
  container.appendChild(createDiv);
  createDiv.appendChild(dateTitle);
  let date = document.createElement("p");
  date.innerText = element.date;
  date.classList.add("shows__date");
  createDiv.appendChild(date);
  let venueTitle = document.createElement("p");
  venueTitle.classList.add("shows__title");
  venueTitle.innerText = element.venueTitle;
  createDiv.appendChild(venueTitle);
  let venue = document.createElement("p");
  venue.innerText = element.venue;
  venue.classList.add("shows__venue");
  createDiv.appendChild(venue);
  let locationTitle = document.createElement("p");
  locationTitle.classList.add("shows__title");
  locationTitle.innerText = element.locationTitle;
  createDiv.appendChild(locationTitle);
  let location = document.createElement("p");
  location.innerText = element.location;
  createDiv.appendChild(location);
  let button = document.createElement("button");
  button.innerText = element.button;
  button.classList.add("shows__button");
  createDiv.appendChild(button);
});
