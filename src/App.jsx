import "./App.css";
import CharacterCard from "./components/CharacterCard";
import charactersData from "../public/charactersData.json";
import { useEffect, useState } from "react";

function App() {
  const [dataCharacters, setDataCharacters] = useState([])
  useEffect(() => {
    const fetchCharacterList= async() => {
      const response=await fetch('https://genshin.jmp.blue/characters/')
      const data=await response.json()
    setDataCharacters(data)
    }
    fetchCharacterList()
  }, [])
  console.log(dataCharacters)
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
