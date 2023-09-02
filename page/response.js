"use strict";

const btnEle = document.querySelector(".confirm-response");
let responseId = 0;

const setResponseId = (id) => {
    responseId = id;
};

btnEle.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.replace("./index.html");
});
