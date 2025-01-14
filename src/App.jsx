import useGetImages from "./hooks/useGetImages"
import Background from "/src/components/Background/Background.jsx";
import Settings from "/src/components/Settings/Settings.jsx";

function App() {
  const images = useGetImages();

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      <Settings />
    </>
  );
}

export default App;