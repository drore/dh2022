import FindTheLetter from './findTheLetter';

const GameManager = {
  currentGameName: 'findTheLetter',
  currentGame: null,
  clickOnLetter(a,b,c){
    return GameManager.currentGame?.clickOnLetter(a,b,c);
  },

  startGame(gameName) {
    this.currentGameName = gameName;
    switch (this.currentGameName) {
      case 'findTheLetter':
        this.currentGame = new FindTheLetter();
        this.currentGame.start();
        break;
      default:
        break;
    }
  },

  init() {
    this.startGame();
  }
};

export default GameManager;
