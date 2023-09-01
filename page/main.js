"use strict";

const subBtnEle = document.querySelector(".btn");
const postInput = document.querySelector(".poster");
const descInput = document.querySelector(".desc");
const imgInput = document.querySelector(".img");
const localPath = "http://127.0.0.1:8080/issue";
const remotePath = "http://116.62.152.170:8080/issue";

subBtnEle.addEventListener("click", async (event) => {
    event.preventDefault();

    const poster = postInput.value.trim();
    const desc = descInput.value.trim();
    const originFileName = imgInput.value.trim();

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

    // Get the form data as a JavaScript object
    const formData = new FormData();
    const extname = originFileName.split(".")[1];
    formData.append("poster", poster);
    formData.append("desc", desc);
    formData.append("image", imgInput.files[0], `${poster}-${desc}.${extname}`);

    // Make a POST request to the server using fetch()
    const response = await fetch(localPath, {
        method: "POST",
        body: formData,
    });

    console.log(JSON.stringify(response));
});
