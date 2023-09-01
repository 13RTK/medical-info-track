"use strict";

const subBtnEle = document.querySelector(".btn");
const postInput = document.querySelector(".poster");
const descInput = document.querySelector(".desc");
subBtnEle.addEventListener("click", () => {
    const poster = postInput.value.trim();
    const desc = descInput.value.trim();

    if (poster.length === 0 || desc.length === 0) {
        alert("请填入相关内容！");
        return;
    }
});
