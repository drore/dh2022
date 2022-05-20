import { useEffect, useState } from 'react';
import './App.css';
import GameBar from './components/GameBar';
import MessageBox from './components/MessageBox';
import TextViewer from './components/TextViewer';
import GameManager from './games/gameManager';

function App() {
    
  const startGame = (gameName) => {
    GameManager.startGame(gameName);
  };

  return (
    <div className='App'>
      <div className='games'>
        <div className='game' onClick={() => startGame('findTheLetter')}>
          Letters
        </div>
        <div className='game'>Words</div>
      </div>
      <MessageBox />
      <GameBar />
      <TextViewer textPath='ten.txt' click={GameManager.clickOnLetter} />
    </div>
  );
}

export default App;
