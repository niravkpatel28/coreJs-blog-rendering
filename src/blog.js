import { data } from "./data.js";

function createBlog(blog) {
  // create heading
  // the function is taking an object not an array
  let heading = document.createElement("h1");
  heading.innerHTML = blog.title;

  // create banner Image
  let bannerImage = document.createElement("img");
  bannerImage.src = blog.imageUrl;
  bannerImage.className = "banner-width";
  //create blog content
  let blogContent = document.createElement("p");
  blogContent.innerHTML = blog.content;

  document.querySelector(".blog-content").appendChild(heading);
  document.querySelector(".blog-content").appendChild(bannerImage);
  document.querySelector(".blog-content").appendChild(blogContent);
  // creating side panel
  createSidePanel(blog);
}

function createSidePanel(blog) {
  let heading = document.createElement("h1");
  heading.innerHTML = "Related Links ";
  document.querySelector(".side-panel").appendChild(heading);
  // create set of links
  blog.links.forEach((link) => {
    let blogLink = document.createElement("p");
    blogLink.innerHTML = link.title;
    blogLink.id = link.id;
    blogLink.onclick = () => {
      renderNewBlog(event);
    };
    document.querySelector(".side-panel").appendChild(blogLink);
  });
}

function renderNewBlog(event) {
  document.querySelector(".blog-content").innerHTML = "";
  document.querySelector(".side-panel").innerHTML = " ";
  // console.log(event.target);
  // console.log("Render new blog");

  let blog = data.filter((blog) => blog.id === event.target.id);
  console.log("INSIDE THE CLICK LINK", blog);
  createBlog(blog[0]);
  // createSidePanel(blog[0]);
}

export { createBlog };
