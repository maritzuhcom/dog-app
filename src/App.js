import React from 'react';
import DogTitle from './components/DogTitle';
import ListView from './components/ListView';
import DogImages from './components/DogImages';
import './App.css';

const App = () => (
  <main className="App">
    <DogTitle />
    <section className="wrapper">
      <ListView />
      <DogImages />
    </section>
  </main>
);

export default App;
