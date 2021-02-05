import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Form from "./Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Quiz from "./Quiz";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getCharacters = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    const data = await response.json();
    setCharacters(data);
  };

  return (
    <Router>
      <div className="nav-container">
        <Navbar />
      </div>
      <Route exact path="/">
        <div>
          <div className="header">
            <h1>Breaking Bad Characters Information</h1>
          </div>
          <Form getQuery={(query) => setQuery(query)} />
          <div className="card-container">
            {characters.map((character) => (
              <CharacterCard
                key={character.char_id}
                name={character.name}
                nickname={character.nickname}
                occupation={character.occupation[0]}
                image={character.img}
              />
            ))}
            ;
          </div>
        </div>
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
    </Router>
  );
}

export default App;
