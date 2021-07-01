let container = document.getElementById("container");
console.log(container);

let concerts = [
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    dateTitle: "DATES",
    date: "Monday Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

console.log(concerts);
// Create Element

concerts.forEach((element) => {
  let dateTitle = document.createElement("p");
  dateTitle.classList.add("shows__title");
  dateTitle.innerText = element.dateTitle;
  container.appendChild(dateTitle);
  let date = document.createElement("p");
  date.innerText = element.date;
  container.appendChild(date);
  let venueTitle = document.createElement("p");
  venueTitle.classList.add("shows__title");
  venueTitle.innerText = element.venueTitle;
  container.appendChild(venueTitle);
  let venue = document.createElement("p");
  venue.innerText = element.venue;
  container.appendChild(venue);
  let locationTitle = document.createElement("p");
  locationTitle.classList.add("shows__title");
  locationTitle.innerText = element.locationTitle;
  container.appendChild(locationTitle);
  let location = document.createElement("p");
  location.innerText = element.location;
  container.appendChild(location);
  let button = document.createElement("button");
  button.innerText = element.button;
  container.appendChild(button);
});
