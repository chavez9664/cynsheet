import React from "react";
import CharacterList from "./components/character/CharacterList";
import useFetch from './api/useFetch';

const Home = () => {

    const {data: charData, isLoading, error} = useFetch('/characters/manager/getAll');


    return (
        <div className="home">
            {isLoading && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {charData && <CharacterList charArray={charData} title="Choose a Character"/>}
        </div>
    );
}

export default Home