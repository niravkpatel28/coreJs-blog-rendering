// this file will render a header

function createHeader() {
  let block = document.createElement("div");
  block.style.width = "100%";
  block.style.height = "20px";
  block.style.backgroundColor = "black";
  document.querySelector(".navigation").appendChild(block);
}

export { createHeader };
