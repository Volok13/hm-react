import './App.css'
import {simpsons} from "./data/MyPersonList.ts";
import CharacterComponent from "./components/CharacterComponent.tsx";

function App() {

  return (
    <>
      {
        simpsons.map((person, index) =>
            <CharacterComponent key={index} person={person}>
              {person.info}
            </CharacterComponent>)
      }
    </>
  )
}

export default App
