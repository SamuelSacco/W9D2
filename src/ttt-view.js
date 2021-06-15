class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard();
    this.bindEvents();
  }

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
  
  bindEvents() {
    this.el.addEventListener("click",this.handleClick)
  }

  handleClick(e) {
    const ele=e.target;"LI"===ele.nodeName&&this.makeMove(ele)
  }

  makeMove(square) {
    const e = JSON.parse(square.dataset.pos),
    r = this.game.currentPlayer;
    try{this.game.playMove(e)};
    catch(square){alert("This "+t.msg.toLowerCase())};
    square.classList.add(r);
    this.game.isOver() && this.handleGameOver()
  }

}

module.exports = View;