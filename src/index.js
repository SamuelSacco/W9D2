const View = require("./ttt-view.js");
const Game = require ("../ttt_node/game");

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".ttt");

  const game = new Game();
  const view = new View(game, element);


});