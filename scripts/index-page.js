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
  console.log("form submitted");
  // console.log(e.target.name.value);
  // console.log(e.target.newcomment.value);
});

// This updates the comment array
function displayComment(commentName, newComment) {
  let updates = comment.unshift({
    name: commentName,
    date: "07/01/2021",
    comment: newComment,
  });
  return updates;
}

displayComment("matt gainer", "New Comment");

function myFunction() {
  let name = document.getElementById("comment__form").elements[0].value;
  let comment = document.getElementById("comment__form").elements[1].value;
  document.getElementById("newComment__name").innerText = name;
  document.getElementById("newComment__date").innerText = today;
  let newCommentDiv = document.createElement("div");
  newCommentDiv.innerText = comment;
  newCommentDiv.classList.add("newComment__comment");
  let placeDiv = document.querySelector(".newcomments");
  placeDiv.appendChild(newCommentDiv);
  // document.getElementById("newComment__comment").innerText = comment;
}
