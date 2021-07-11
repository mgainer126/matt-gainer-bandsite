let commentLocal = document.querySelector("#comment");
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

let key = "676f372d-598c-40fe-b139-0c0b8bab9f4";

axios
  .get(`https://project-1-api.herokuapp.com/comments/?api_key=${key}`)
  .then((response) => {
    let comments = response.data;
    displayComments(comments);
  });

const form = document.getElementById("comment__form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = e.target.name.value;
  let comment = e.target.newcomment.value;

  axios
    .post(`https://project-1-api.herokuapp.com/comments/?api_key=${key}`, {
      name: name,
      comment: comment,
    })
    .then((response) => {
      axios
        .get(`https://project-1-api.herokuapp.com/comments/?api_key=${key}`)
        .then((response) => {
          let comments = response.data;
          commentLocal.innerText = " ";
          e.target.newcomment.value = "";
          e.target.name.value = "";
          displayComments(comments);
        });
    })
    .catch((error) => {
    console.warn(error);
    });
});

let displayComments = function (comments) {
  comments.forEach((element) => {
    let name = document.createElement("p");
    let namediv = document.createElement("div");
    let circle = document.createElement("div");
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__container");
    circle.classList.add("comment-circle");
    namediv.appendChild(circle);
    name.innerText = element.name;
    name.classList.add("comment-display--name");
    namediv.classList.add("comment-display--orientation");
    commentLocal.appendChild(namediv);
    namediv.appendChild(name);
    let date = document.createElement("p");
    let unix= element.timestamp;
    date.innerText = timeConversion(unix);
    date.classList.add("comment-display--date");
    namediv.appendChild(date);
    let comment = document.createElement("p");
    comment.innerText = element.comment;
    comment.classList.add("comment-display--comment");
    commentContainer.appendChild(namediv);
    commentContainer.appendChild(comment);
    commentLocal.prepend(commentContainer);
  });
};
