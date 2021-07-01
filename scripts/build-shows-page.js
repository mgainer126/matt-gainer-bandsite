let container = document.getElementById("container");
console.log(container);

let concerts = [
  {
    date: "Monday Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Tuesday Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Nov 6 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Friday Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

console.log(concerts);
// Create Element

concerts.forEach((element) => {
  let date = document.createElement("p");
  date.innerText = element.date;
  container.appendChild(date);
  let venue = document.createElement("p");
  venue.innerText = element.venue;
  container.appendChild(venue);
  let location = document.createElement("p");
  location.innerText = element.location;
  container.appendChild(location);
  let button = document.createElement("button");
  button.innerText = element.button;
  container.appendChild(button);
});
