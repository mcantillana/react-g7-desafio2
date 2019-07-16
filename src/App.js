import React from 'react';

import HeroSearch from './components/HeroSearch';
import HeroTable from './components/HeroTable';
import ExampleComponent from './components/ExampleComponent';

import './assets/css/style.css';

function App() {

  const heroes = [
      { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑'},
      { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔'},
      { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹'},
      { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒'},
      { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡'}
  ]
  return (

    <div className="index">
      <h2>Fellowship of the Ring</h2>
    
      <div className="container">

      <HeroSearch />
      <HeroTable heroes={heroes} />
      </div>
    </div>
  );
}

export default App;
