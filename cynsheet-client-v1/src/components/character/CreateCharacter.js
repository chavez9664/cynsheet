import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import api from "../../api/axiosConfig";


const CreateCharacter = () => {

    const[nameIn, setName] = useState('');
    const[ancestryIn, setAncestry] = useState('');
    const[advClassIn, setClass] = useState('Runner');

    const[hpIN, setHP] = useState(1);
    const[manaIn, setMana] = useState(1);
    const[levelIn, setLevel] = useState(1);

    const[conIn, setConstitution] = useState(0);
    const[mightIn, setMight] = useState(0);
    const[finIn, setFinesse] = useState(0);
    const[intIn, setIntellect] = useState(0);
    const[egoIn, setEgo] = useState(0);
    const[senIn, setSense] = useState(0);

    const[percIn, setPerception] = useState(0);
    const[athIn, setAthletics] = useState(0);
    const[thiIn, setThievery] = useState(0);
    const[persIn, setPersuasion] = useState(0);
    const[arcIn, setArcana] = useState(0);
    const[fishIn, setFishing] = useState(0);

    const [langFields, setLangFields] = useState([
        {language: ''}
    ]);
    const[isLoading, setIsLoading] = useState(false);

    const history = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const character = {
            name: nameIn,
            ancestry: ancestryIn,
            advClass: advClassIn, 
            languages: langFields.map(field => field.language),
            hp: hpIN,
            mana: manaIn,
            level: levelIn,
            constitution: conIn,
            might: mightIn,
            finesse: finIn,
            intellect: intIn,
            ego: egoIn,
            sense: senIn,
            perception: percIn,
            athletics: athIn,
            thievery: thiIn,
            persuasion: persIn,
            arcana: arcIn,
            fishing: fishIn
        };
        
        setIsLoading(true);
        api.post('/characters/manager/saveCharacter', character)
        .then(function (response) {
            console.log(response)
            console.log('new character saved')
            setIsLoading(false);
            history('/');
        })
        .catch(function (error) {
            console.log(error)
        }); 
    };

    const handleLangChange = (index, e) => {
        let data = [...langFields];
        data[index][e.target.name] = e.target.value;
        setLangFields(data);
    }
    const addLangField = (e) => {
        e.preventDefault();
        let newfield = {language: ''};
        setLangFields([...langFields, newfield]);
    }

    const removeLangField = (index, e) => {
        e.preventDefault();
        let data = [...langFields];
        data.splice(index, 1);
        setLangFields(data);
    }

    return (
        <div className="createCharacter">
            <h2>Character Creation</h2>
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Dov"
                    required
                    value={nameIn}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Ancestry</label>
                <input 
                    type="text"
                    placeholder="Demi-elf Human"
                    required
                    value={ancestryIn}
                    onChange={(e) => setAncestry(e.target.value)}
                />
                <label>Adventuring Class</label>
                <select
                    value={advClassIn}
                    onChange={(e) => setClass(e.target.value)}
                    >
                    <option value="Runner">Runner</option>
                    <option value="Scholar">Scholar</option>
                    <option value="Spellslinger">Spellslinger</option>
                    <option value="Vanguard">Vanguard</option>
                </select>
                <label>HP</label>
                <input
                    type="number"
                    required
                    min={1}
                    max={24}
                    value={hpIN}
                    onChange={(e) => setHP(e.target.value)}
                />
                <label>Mana</label>
                <input
                    type="number"
                    required
                    min={1}
                    max={18}
                    value={manaIn}
                    onChange={(e) => setMana(e.target.value)}
                />
                <label>Level</label>
                <input
                    type="number"
                    required
                    min={1}
                    max={2}
                    value={levelIn}
                    onChange={(e) => setLevel(e.target.value)}
                />
                <label>Constitution</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={conIn}
                    onChange={(e) => setConstitution(e.target.value)}
                />
                <label>Might</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={mightIn}
                    onChange={(e) => setMight(e.target.value)}
                />
                <label>Finesse</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={finIn}
                    onChange={(e) => setFinesse(e.target.value)}
                />
                <label>Intellect</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={intIn}
                    onChange={(e) => setIntellect(e.target.value)}
                />
                <label>Ego</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={egoIn}
                    onChange={(e) => setEgo(e.target.value)}
                />
                <label>Sense</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={3}
                    value={senIn}
                    onChange={(e) => setSense(e.target.value)}
                />
                <label>Perception</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={percIn}
                    onChange={(e) => setPerception(e.target.value)}
                />
                <label>Athletics</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={athIn}
                    onChange={(e) => setAthletics(e.target.value)}
                />
                <label>Thievery</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={thiIn}
                    onChange={(e) => setThievery(e.target.value)}
                />
                <label>Persuasion</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={persIn}
                    onChange={(e) => setPersuasion(e.target.value)}
                />
                <label>Arcana</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={arcIn}
                    onChange={(e) => setArcana(e.target.value)}
                />
                <label>Fishing</label>
                <input
                    type="number"
                    required
                    min={0}
                    max={2}
                    value={fishIn}
                    onChange={(e) => setFishing(e.target.value)}
                />
                <label>Languages</label>
                {langFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <input
                            name='language'
                            placeholder="Language"
                            value={input.language}
                            onChange={e => handleLangChange(index, e)}
                            />
                            <button onClick={e => removeLangField(index, e)}>Remove Language</button>
                        </div>
                    )
                })}
                <button onClick={addLangField}>Add another Language</button>
                {!isLoading && <button onClick={handleSubmit}>Save Character</button>}
                {isLoading && <button disabled>Saving Character...</button>}
            </form>
        </div>
      );
}
 
export default CreateCharacter;