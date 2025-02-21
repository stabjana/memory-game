import { useState } from "react";
import Background from "/src/components/Background/Background.jsx";
import Settings from "/src/components/Settings/Settings.jsx";
import Board from "./components/Board/Board"

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => { // pass the options
    setGameOptions(options);
  };

  const restartGame = () => {
    setGameOptions(null);
  };

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      {!gameOptions ? (<Settings startGame={startGame} />
      ) : (
        <Board gameOptions={gameOptions} restartGame={restartGame} />)}
    </>
  );
}

export default App;