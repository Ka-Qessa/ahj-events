/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
class GoblinGame {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.score = 0;
    this.missed = 0;
    this.holes = [];
    this.currentHole = null;
    this.timer = null;
  }

  init() {
    this.createHoles();
    this.startGame();
  }

  createHoles() {
    for (let i = 1; i <= 16; i += 1) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      hole.id = `hole${i}`;
      this.gameBoard.appendChild(hole);
      this.holes.push(hole);
    }
  }

  startGame() {
    this.timer = setInterval(() => {
      this.moveGoblin();
    }, 1000);
    this.gameBoard.addEventListener('click', this.handleGoblinClick.bind(this));
  }

  stopGame() {
    clearInterval(this.timer);
    this.gameBoard.removeEventListener('click', this.handleGoblinClick.bind(this));
  }

  moveGoblin() {
    const randomPosition = Math.floor(Math.random() * this.holes.length);
    const newHole = this.holes[randomPosition];
    if (newHole !== this.currentHole && !newHole.classList.contains('hole_has-goblin')) {
      this.currentHole.classList.remove('hole_has-goblin');
      newHole.classList.add('hole_has-goblin');
      this.currentHole = newHole;
      this.missed++;
      if (this.missed >= 5) {
        this.stopGame();
        alert('Game Over!');
      }
    }
  }

  handleGoblinClick(event) {
    if (event.target.classList.contains('hole_has-goblin')) {
      this.score++;
      event.target.classList.remove('hole_has-goblin');
      this.currentHole = null;
    }
  }
}

const game = new GoblinGame();
game.init();
export default GoblinGame;
