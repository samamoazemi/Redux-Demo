
const redux = require("redux");
const createStore = redux.createStore;

// action :

const BUY_CAKE = "BUY_CAKE";

function buyCake() {  // action creator
  return(
    {
      type: BUY_CAKE,
    }
  )
}

// reducer => how to transform state !
// reducer : (state, action) => new state

const initialState = {
  numOfCake: 10,
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 }
    default:
      return state;
  }
}

// store :

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();