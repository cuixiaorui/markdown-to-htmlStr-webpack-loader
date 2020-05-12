import doc from "./doc.md";

window.onload = () => {
  const body = document.querySelector("body");
  console.log(doc)
  body.innerHTML = doc;
};
