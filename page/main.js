"use strict";

const localPath = "http://127.0.0.1:8080/api/v1/issue";
const remotePath = "http://116.62.152.170:8080/api/v1/issue";

const app = {
    data() {
        return {
            poster: "",
            desc: "",
            file: null,
            containerHidden: "",
            checkHidden: "hidden",
            responseHidden: "hidden",
        };
    },
    methods: {
        toggleContainerAndCheck() {
            console.log("toggle called");
            this.containerHidden = this.containerHidden === "" ? "hidden" : "";
            this.checkHidden = this.checkHidden === "hidden" ? "" : "hidden";
        },

        imageChange(event) {
            console.log("image called");
            this.file = event.target.files[0];

            console.log(this.file.name);
        },

        upload() {
            console.log("upload called");

            if (
                this.poster.length === 0 ||
                this.desc.length === 0 ||
                this.file === null
            ) {
                const missingFields = [];
                if (this.poster.length === 0) {
                    missingFields.push("提交人");
                }
                if (this.desc.length === 0) {
                    missingFields.push("描述");
                }
                if (this.file === null) {
                    missingFields.push("图片");
                }

                alert(`请填入相关内容！缺失内容: ${missingFields.join(",")}`);
                return;
            }

            this.toggleContainerAndCheck();
        },

        cancel() {
            console.log("cancel called");
            this.toggleContainerAndCheck();
        },

        async confirm() {
            console.log("confirm called");

            // Get the form data as a JavaScript object
            const formData = new FormData();
            const extname = this.file.name.split(".")[1];
            formData.append("poster", this.poster);
            formData.append("desc", this.desc);
            formData.append(
                "image",
                this.file,
                `${this.poster}-${this.desc}.${extname}`
            );

            try {
                const response = await fetch(localPath, {
                    method: "POST",
                    body: formData,
                });
                const responseData = await response.json();
                console.log(responseData);

                this.containerHidden = "hidden";
                this.checkHidden = "hidden";
                this.responseHidden = "hidden";

                return false;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
    },
};

Vue.createApp(app).mount("#app");
