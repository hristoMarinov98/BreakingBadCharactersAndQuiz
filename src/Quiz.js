import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "./Quiz.css";

const Quiz = () => {
  const [gender, setGender] = useState("");
  const [result, setResult] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender]);

  const fetchCharacters = async () => {
    if (gender === "Male") {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters/1`
      );
      const data = await response.json();
      setResult(data);
    }
    if (gender === "Female") {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters/3`
      );
      const data = await response.json();
      setResult(data);
    }
    if (gender === "Other") {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters/9`
      );
      const data = await response.json();
      setResult(data);
    }
  };

  const getCharacterInfo = () => {
    const { name, nickname, occupation, img } = result[0];
    return (
      <CharacterCard
        name={name}
        nickname={nickname}
        occupation={occupation[0]}
        image={img}
      />
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const showResult = getCharacterInfo();
    setCharacter(showResult);
  };

  return (
    <div className="container">
      <h3>Which character are you?</h3>
      <p>Select gender:</p>
      <form>
        <input
          type="radio"
          name="Gender"
          value="Male"
          onClick={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          name="Gender"
          value="Female"
          onClick={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
        <br />

        <input
          type="radio"
          name="Gender"
          value="Other"
          onClick={(e) => setGender(e.target.value)}
        />
        <label htmlFor="other">Other</label>
        <br />
      </form>
      <button onClick={(e) => handleClick(e)}>Show me</button>
      <div>{character}</div>
    </div>
  );
};

export default Quiz;
