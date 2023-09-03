exports.convertToDateTime = (timestamp) => {
    const date = new Date(timestamp);

    return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
};

exports.convertToISOString = (timestamp) => {
    const date = new Date(timestamp);
    const hour = date.getHours();

    const isoStrArr = date.toISOString().split("T");
    isoStrArr[1] = hour + isoStrArr[1].slice(2);

    return isoStrArr.join("T");
};
