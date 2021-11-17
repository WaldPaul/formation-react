import React from 'react'
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="OK" onButtonClicked={(arg)=>
        alert('click sur button')
      }/>
      <Button text="Cancel" 
        onButtonClicked={(arg)=> alert('message')
        
      }
        bgColor="tomato"
      />
      <Button text="Autre option" onButtonClicked={(arg)=>
        alert('message')
      }/>
      <Button text="Debug" onButtonClicked={(arg)=>
        alert('message')
      }/>
      <Button text="Et autre trucs nuls" onButtonClicked={(arg)=>
        alert('message')
      }/>
      <Button text="bisous" onButtonClicked={(arg)=>
        alert('message')
      }/>
    </div>
  );
}

export default App;
