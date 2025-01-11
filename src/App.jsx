import axios from "axios";
import Background from "/src/components/Background/Background.jsx";

const BASE_URL = "https://api.pexels.com/v1/search"; //from Pexels API - used to perform a search query for imgaes based on parameters like keywords

// getting the data
async function fetchData() {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: import.meta.env.VITE_AUTH_KEY, // API-key from .env-Datei
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function App() {
  fetchData();

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
    </>
  );
}

export default App;