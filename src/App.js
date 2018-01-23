import React from 'react';
import './App.css';
import DogTitle from './components/DogTitle';
import ListView from './components/ListView';

const App = () => (
  <main className="App">
    <DogTitle />
    <section className="wrapper">
      <ListView />
    </section>
  </main>
);

export default App;
