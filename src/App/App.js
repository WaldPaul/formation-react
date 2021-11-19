import React from "react";
import { connect } from "react-redux";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import InternalLayout from "./components/InternalLayout/InternalLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config.js";
import store , { currentInitialState, ressourcesInitialState } from './store/store';

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('%c%s', 'font-size:22pt;color:red;background-color:skyblue', 'le changement est pret et effectif ' + JSON.stringify(this.state));
  }
  render() {
    return (
      <>
        <Header/>
        <div className="App">
          {/* <FlexLayout>
          <MemeViewer 
            meme={
              this.props.current
            } 
            image={
              this.props.images.find((e)=>e.id===this.props.current.imageId)
            }

            />

            <MemeForm 
              // onMemeChange={(meme)=> {
              //   this.setState({current: meme})
              // }
              // }
              // images={this.state.images}
            />
          </FlexLayout> */}
          <MemeThumbnail
            memes={this.props.memes}
            images={this.props.images}
            
          >
            
          </MemeThumbnail>
        </div>
      </>
    );
  }
}
function mapStateToProps(state,own){
  return {
    ...own,
    current:state.current,
    images:state.ressources.images
  }
}
// function getProps(state){
//   return {
//     memes:state.ressources.images,
//     images:state.ressources.images
//   }
// }
function mapDispatchToProps(dispatch)
{
  return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
