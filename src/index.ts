import { characters } from "./characters/characters.js";
import App from "./components/App/App.js";
import Card from "./Card/Card.js";

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

const characterList = document.querySelector(".character-list")!;

characters.forEach((character) => {
  const card = new Card(characterList, "li", "col", character.CharacterData);
  card.render();
});
