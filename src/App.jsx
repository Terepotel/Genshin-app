import "./App.css";
import CharacterCard from "./components/CharacterCard";
import charactersData from "../public/charactersData.json";

function App() {
  return (
    <>
      <h1>Genshin App</h1>
      <div className="charactersContainer">{
        charactersData.data.map((character)=> {
          return <CharacterCard character={character} key={character.name}/>
        })
      }
      </div>
    </>
  );
}

export default App;
