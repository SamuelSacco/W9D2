class View {
  constructor(game, el) {}

  setupBoard() {
    const t = document.createElement("ul");
    for (let e = 0; e < 3; e++)

    for (let r = 0; r < 3; r++){
      s = document.createElement("li")
      s.dataset.pos = JSON.stringify([e, r])
      t.append(s);
    }

    this.el.append(t)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;