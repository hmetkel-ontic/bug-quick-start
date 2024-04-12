import path from "path";

const filePath = path.join("foo", "bar", "image.png");

const fileNmae = path.basename(filePath);

console.log(fileNmae);
