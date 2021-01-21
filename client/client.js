// const { post } = require("got");

const form = document.querySelector("form");
const loader = document.querySelector(".loading");

const API_URI = "http://localhost:5000/mews";

loader.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData);

  const name = formData.get("name");
  const content = formData.get("content");

  const mew = {
    name,
    content,
  };
  loader.style.display = "";
  form.style.display = "none";

  console.log(mew);

  fetch(API_URI, {
    method: "POST",
    body: JSON.stringify(mew),
    headers: {
      "content-type": "application/json",
    },
  });
});
