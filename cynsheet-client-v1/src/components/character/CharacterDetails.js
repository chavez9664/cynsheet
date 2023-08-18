import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharacterForm } from "./CharacterForm";
import api from "../../api/axiosConfig";
import { formToJSON } from "axios";

const CharacterDetails = () => {

    const {id} = useParams()
    const history = useNavigate();

    const[charData, setData] = useState(null)

    useEffect(() => {
        const fillData = async () => {
        api.get('/characters/manager/getCharacter/' + id)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(formToJSON(error));
        });}
        fillData()
    }, [])

    const deleteCharacter = () => {
       // <button onClick={deleteCharacter}>Delete</button>
        api.delete('/characters/manager/delete/' + id)
        .then(function (response) {
            console.log(response)
            console.log('character has been deleted')
            history('/');
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    return charData ? (
    <div className="viewCharacter">
        <CharacterForm preloadedValues={charData}/>
    </div>    
    ) : <div>Loading...</div>
}
 
export default CharacterDetails;