import { data } from "./data.js";
import { createBlog } from "./blog.js";
import { createHeader } from "./header.js";
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBlog() {
  let index = randomInteger(0, data.length - 1);
  createBlog(data[index]);
}
createHeader();
randomBlog();
