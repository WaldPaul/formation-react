import React from "react";
import Button from "./components/Button/Button";
import MemeViewer from "./components/MemeViewer/MemeViewer";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }
  componentDidUpdate() {
    console.log('%c%s', 'font-size:42pt;color:red;background-color:skyblue', 'le changement est pret et effectif ', this.state.counter);
  }
  render() {
    return (
      <div className="App">
        <MemeViewer 
        meme={{
          titre:'1er meme',
          text:'look behind you',
          x:370,
          y:530,
          fontSize:27,
          color:"tomato",
          fontWeight:'900',
          underline: true,
          italic:true,
          frameX:0,
          frameY:0,
        }} 
        image={{
          // id:0,
          // url:"img/Quiz-Kid.jpg",
          // titre:"Quiz-Kid",
          // w:778,
          // h:736,
        }}

        />
      </div>
    );
  }
}

export default App;
