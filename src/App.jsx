import useGetImages from "./hooks/useGetImages"
import Background from "/src/components/Background/Background.jsx";
import Settings from "/src/components/Settings/Settings.jsx";

function App() {
  const images = useGetImages();

  const startGame = (options) => {
    console.log(options);
  }

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      <Settings startGame={startGame} />
    </>
  );
}

export default App;