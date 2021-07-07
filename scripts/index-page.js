let commentLocal = document.querySelector("#comment");
let today = new Date().toLocaleDateString(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

let key = "f4576737-bba0-4e1e-9893-4bb056f02f64";

let displayComments = function (comments) {
  comments.forEach((element) => {
    let name = document.createElement("p");
    let namediv = document.createElement("div");
    let circle = document.createElement("div");
    circle.classList.add("comment-circle");
    namediv.appendChild(circle);
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
};

axios
  .get("https://project-1-api.herokuapp.com/comments/?api_key=`${key}`")
  .then((response) => {
    let comments = response.data;
    displayComments(comments);
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
