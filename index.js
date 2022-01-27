
const redux = require("redux");
const createStore = redux.createStore;

// action :

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {  // action creator
  return(
    {
      type: BUY_CAKE,
    }
  )
}

function buyIcecream() {
  return(
    {
      type: BUY_ICECREAM,
    }
  )
}

// reducer => how to transform state !
// reducer : (state, action) => new state

// const initialState = {
//   numOfCake: 10,
//   numOfIcecream: 20,
// }

const initialCakeState = {
  numOfCake: 10,
}
const initialIcecreamState = {
  numOfIcecream: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 }
    default:
      return state;
  }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type){
    case BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIcecream - 1 }
    default:
      return state;
  }
}

// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case BUY_CAKE:
//       return { ...state, numOfCake: state.numOfCake - 1 }
//     case BUY_ICECREAM:
//       return { ...state, numOfIcecream: state.numOfIcecream - 1 }  
//     default:
//       return state;
//   }
// }

// store :

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();