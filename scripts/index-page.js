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
    date.innerText = element.timestamp;
    date.classList.add("comment-display--date");
    namediv.appendChild(date);
    let comment = document.createElement("p");
    comment.innerText = element.comment;
    comment.classList.add("comment-display--comment");
    commentContainer.appendChild(namediv);
    commentContainer.appendChild(comment);
    commentLocal.appendChild(commentContainer);
  });
};

const form = document.getElementById("comment__form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = e.target.name.value;
  let comment = e.target.newcomment.value;

  axios
    .post("https://project-1-api.herokuapp.com/comments/?api_key=`${key}`", {
      name: name,
      comment: comment,
    })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(error);
    });
});

axios
  .get("https://project-1-api.herokuapp.com/comments/?api_key=`${key}`")
  .then((response) => {
    let comments = response.data;
    console.log(comments);
    displayComments(comments);
  });
