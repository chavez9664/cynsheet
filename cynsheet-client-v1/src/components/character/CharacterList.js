import { Link } from "react-router-dom";

const CharacterList = ({charArray, title, handleDelete}) => {

    return (
        <div className="character-list">
            <h2>{title}</h2>
            {charArray.map((character) => (
                <div className="character preview" key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                     <h2>{character.name}</h2>
                     <p>Character Class: {character.advClass}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
    );
}
 
export default CharacterList;