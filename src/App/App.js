import React from 'react'
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="OK" onButtonClicked={(arg)=>
        alert('click sur button')
      }/>
      <Button text="Cancel" onButtonClicked={()=>
        alert('message')
      }/>
      <Button text="Autre option"/>
      <Button text="Debug"/>
      <Button text="Et autre trucs nuls"/>
      <Button text="bisous"/>
    </div>
  );
}

export default App;
