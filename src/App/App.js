import React from 'react'
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="OK"/>
      <Button text="Cancel"/>
      <Button text="Autre option"/>
      <Button text="Debug"/>
      <Button text="Et autre trucs nuls"/>
      <Button text="bisous"/>
    </div>
  );
}

export default App;
