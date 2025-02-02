import { animals } from './animals'; 
import React from 'react';

const showBackground = true;

const displayFact = (e) => {
  const animalName = e.target.alt;
  const animalFacts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFacts.length);
  const randomFact = animalFacts[randomIndex];

  const factElement = document.getElementById('fact');
  factElement.innerHTML = randomFact;
  factElement.style.display = "flex";
};

const App = () => {
  const background = (
    <img className="background" alt="savanna" src="/images/background.jpg" />
  ); 

  const images = animals ? Object.keys(animals).map((animal) => (
    <img 
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  )) : [];

  return (
    <div>      
      {showBackground && background}
      <div className="container">
        <h1>Click an animal for a fun fact!</h1>
        <div className="animals">{images}</div>
        <p id="fact"></p>
      </div>
    </div>
  );
};

export default App;
