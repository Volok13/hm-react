import {simpsons} from "../../data/MyPersonList.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";

function SimpsonsFamily() {

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

export default SimpsonsFamily;