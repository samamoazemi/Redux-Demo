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
      return { ...state, numOfCake: numOfCake - 1 }
    default:
      return state;
  }

}