import { createStore } from "redux";
import { combineReducers } from "redux";
import { REST_ADR, REST_RESSOURCES } from "../config/config.js";

const ressourcesInitialState = {
  memes: [],
  images: [],
};
export const RESSOURCES_PUBLIC_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});
function ressourceReducer(state = ressourcesInitialState, action) {
  console.log("action", action);
  switch (action.type) {
    case 'INIT':
      const pimage=fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then((f) => f.json())
      const pmemes=fetch(`${REST_ADR}${REST_RESSOURCES.memes}`).then((f) => f.json())
      Promise.all([pimage,pmemes])
        .then(arr_arr=>{
            console.log('\n\n',action)
            store.dispatch({type:'INIT_ARRAY',values:arr_arr})
        })
        //.then((arr) => this.setState);
      return state;
    case 'INIT_ARRAYS':
        return {...state, images:[ action.values[0]], memes: action.values[1]}
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
      return { ...state, images: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
      return { ...state, memes: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}

export const currentInitialState = {
  imageId: 0,
  titre: "1er meme",
  text: "look behind you",
  x: 370,
  y: 530,
  fontSize: 27,
  color: "#c000",
  fontWeight: "900",
  underline: true,
  italic: true,
  frameX: 0,
  frameY: 0,
};

export const CURRENT_PUBLIC_ACTION = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_MEME: "CLEAR_MEME",
  SAVE_MEME: "SAVE_MEME",
});

const currentReducer = (state = currentInitialState, action) => {
  switch (action.type) {
    case CURRENT_PUBLIC_ACTION.UPDATE_CURRENT:
      return { ...action.value };
    case CURRENT_PUBLIC_ACTION.CLEAR_MEME:
      return { ...currentInitialState };
    default:
      return state;
  }
};

// let state=ressourceReducer(undefined,{type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values: [{id:0}, {id:1}] })

const store = createStore(
  combineReducers({ current: currentReducer, ressources: ressourceReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({
//   type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST,
//   values: [{ id: 0 }, { id: 1 }],
// });
// store.dispatch({
//   type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST,
//   values: [{ id: 10 }, { id: 11 }],
// });
// store.dispatch({ type: RESSOURCES_PUBLIC_ACTIONS.ADD_MEME, value: { id: 20 } });
store.dispatch({ type:'INIT' });

export default store;
