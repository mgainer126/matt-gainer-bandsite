let commentLocal = document.querySelector("#comment");
let today = new Date().toLocaleDateString(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

let comment = [
  {
    name: "Connor Walton",
    date: today,
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves rvernce. Let us apprciate this for what it is and what it contains",
  },
  {
    name: "Emilie Beach",
    date: today,
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relieve, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acousta",
    date: today,
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

comment.forEach((element) => {
  let name = document.createElement("p");
  let namediv = document.createElement("div");
  name.innerText = element.name;
  name.classList.add("comment-display--name");
  namediv.classList.add("comment-display--orientation");
  commentLocal.appendChild(namediv);
  namediv.appendChild(name);

  let date = document.createElement("p");
  date.innerText = element.date;
  date.classList.add("comment-display--date");
  namediv.appendChild(date);

  let comment = document.createElement("p");
  comment.innerText = element.comment;
  comment.classList.add("comment-display--comment");
  commentLocal.appendChild(comment);
});

const form = document.getElementById("comment__form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let sendBrowser = document.querySelector(".newcomment");
let placment = document.querySelector(".comment-display--orientation");

function displayComment() {
  let name = document.getElementById("comment__form").elements[0].value;
  let newCommentName = document.createElement("p");
  newCommentName.innerText = name;
  newCommentName.classList.add("newComment__name");
  placment.appendChild(newCommentName);
  console.log(newCommentName);

  let newDate = document.createElement("p");
  newDate.innerText = today;
  newDate.classList.add("newComment__date");
  placment.appendChild(newDate);
  console.log(newDate);

  let comment = document.getElementById("comment__form").elements[1].value;
  let newComment = document.createElement("p");
  newComment.innerText = comment;
  newComment.classList.add("newComment__comment");
  sendBrowser.appendChild(newComment);
  console.log(newComment);
}
