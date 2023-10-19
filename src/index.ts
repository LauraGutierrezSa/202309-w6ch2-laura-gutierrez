import App from "./components/App/App.js";

const appClass = document.querySelector(".app")!;
const divContainer = new App(appClass, "div", "container");
divContainer.render();

const ulContainer = document.querySelector(".container")!;
const unorderList = new App(
  ulContainer,
  "ul",
  "character-list row list-unstyled",
);
unorderList.render();
