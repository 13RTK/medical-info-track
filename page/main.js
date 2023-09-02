"use strict";

const containerEle = document.querySelector(".container");
const checkEle = document.querySelector(".check");
const responseEle = document.querySelector(".response");

const postInput = document.querySelector(".poster");
const descInput = document.querySelector(".desc");
const imgInput = document.querySelector(".img");
const posterCheck = document.querySelector(".poster-check");
const descCheck = document.querySelector(".desc-check");
const successMsgEle = document.querySelector(".success-msg");

const subBtnEle = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector(".confirm");

const localPath = "http://127.0.0.1:8080/api/v1/issue";
const remotePath = "http://116.62.152.170:8080/api/v1/issue";

let poster = "";
let desc = "";

const toggleContainerAndCheck = () => {
    containerEle.classList.toggle("hidden");
    checkEle.classList.toggle("hidden");
};

const toggleReponseAndOther = () => {
    responseEle.classList.toggle("hidden");
    checkEle.classList.toggle("hidden");
};

subBtnEle.addEventListener("click", (event) => {
    event.preventDefault();

    poster = postInput.value.trim();
    desc = descInput.value.trim();

    if (
        poster.length === 0 ||
        desc.length === 0 ||
        imgInput.files[0] === undefined
    ) {
        const missingFields = [];
        if (poster.length === 0) {
            missingFields.push("提交人");
        }
        if (desc.length === 0) {
            missingFields.push("描述");
        }
        if (imgInput.files[0] === undefined) {
            missingFields.push("图片");
        }

        alert(`请填入相关内容！缺失内容: ${missingFields.join(",")}`);
        return;
    }

    toggleContainerAndCheck();
});

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();

    toggleContainerAndCheck();
});

confirmBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    // Get the form data as a JavaScript object
    const originFileName = imgInput.value.trim();
    const formData = new FormData();
    const extname = originFileName.split(".")[1];
    formData.append("poster", poster);
    formData.append("desc", desc);
    formData.append("image", imgInput.files[0], `${poster}-${desc}.${extname}`);

    const response = await fetch(localPath, {
        method: "POST",
        body: formData,
    });
    const responseData = await response.json();

    // TODO: Need testing

    // localStorage.setItem("id", JSON.stringify(responseData));
    // window.location.replace("./response.html");

    // console.log("After window.location");
});
