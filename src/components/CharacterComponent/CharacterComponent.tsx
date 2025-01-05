import {FC} from "react";
import styles from './CharacterComponent.module.css';
import {IPerson} from "../../models/IPerson.ts";


type PersonType = {
    person:IPerson;
    children?:string;
}

const CharacterComponent:FC<PersonType> = ({person, children}) => {
    return(
        <div className={styles.target}>
            <div className={styles.person}>
                <h2>{person.name}</h2>
                <h3>{person.surname}</h3>
                <p>{person.age}</p>
                <img src={person.photo} alt={person.name} className={styles.photo}/>
            </div>
            <div className={styles.info}><p>{children}</p></div>
        </div>
    )
}

export default CharacterComponent;