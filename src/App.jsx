import "./App.css";
import CharacterCard from "./components/CharacterCard";
import albedoImage from "./assets/albedo.jpg"
import sayuImage from "./assets/sayu.jpeg"
import ventiImage from "./assets/venti.jpg"
import dilucImage from "./assets/diluc.jpg"

const characters=[
  {
  name: "Albedo",
  description: 'Alquimista en Jefe de los Caballeros de Favonius y Capitán del equipo de investigacion. Lo llaman el "Príncipe de la Roca Caliza"' , 
  image: albedoImage
},
{
	name:"Venti",
	description:'Uno de los muchos bardos de Mondstadt que deambula libremente por las calles y callejones de la ciudad',
	image:ventiImage
},
{
	name:"Diluc",
	description:'El magnate del imperio vinícola de Mondstadt, inigualable en todos los sentidos.',
	image:dilucImage},

  {
    name:"Sayu",
    description:'Una ninja pertenciente a Los Ocelos. Muy bajita y siempre con aspecto de no haber dormido lo suficiente.',
    image:sayuImage
  }
]

function App() {
  return (
    <>
      <h1>Genshin App</h1>
      {
        characters.map((character)=> {
          return <CharacterCard character={character}/>
        })
      }
    </>
  );
}

export default App;
