import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './components/header/Header';
import CreateCharacter from './components/character/CreateCharacter';
import CharacterDetails from './components/character/CharacterDetails';
import NotFound from './components/NotFound';

function App() {

  const [charData, setCharacters] = useState();
  const title = 'Cynosure RPG Character Sheet Proof of Concept App'

  return (
    
    <div className="App">
      <Header/>
      <div className="content">
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/create" element={<CreateCharacter/>}></Route>
        <Route exact path = "/characters/:id" element={<CharacterDetails/>}></Route>
        <Route path = "*" element={<NotFound/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
