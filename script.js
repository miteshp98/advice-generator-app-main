"use strict";

const advice = document.querySelector(".advice");
const id = document.querySelector(".advice-id");
const button = document.querySelector(".random-advice-btn ");
const url = "https://api.adviceslip.com/advice";
const icon = button.firstElementChild;

const fetchData = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      advice.innerHTML = `<q>${data.slip.advice}</q>`;
      id.innerHTML = `ADVICE #${data.slip.id}`;
    })
    .catch((err) => {
      advice.innerHTML = `<p>Error Fetching advice. Please try again later.</p>`;
    });
};

button.addEventListener("click", function () {
  fetchData();
  icon.classList.remove("button-animation");
  void icon.offsetWidth;
  icon.classList.add("button-animation");
});

document.addEventListener("DOMContentLoaded", fetchData);
