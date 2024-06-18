

import React, { useState } from 'react';
import './App.css';
import animalsData from './Data/MockData.js';
import { handleActivate, handleDelete } from './utils/render';

function App() {
  const [animals, setAnimals] = useState(animalsData);

  return (
    <>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal, index) => (
            <li key={index} className={animal.active ? 'active' : ''}>
              {animal.icon} {animal.type}{' '}
              <button onClick={() => handleActivate(animals, index, setAnimals)}>
                {animal.active ? 'Deactivate' : 'Activate'}
              </button>{' '}
              <button onClick={() => handleDelete(animals, index, setAnimals)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No animals left.</p>
      )}
    </>
  );
}

export default App;
