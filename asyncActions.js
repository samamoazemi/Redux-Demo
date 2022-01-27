// async js =>
const redux = require("redux");
const createStore = redux.createStore;

// fetch users :
// 1.request => loading
// 2.success => data
// 3. failure => error

// action :
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

// ACTION CREATOR :
function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SECCESS,
        payload: users,
    }
}

//reducer :
const initialState = {
  loading: false,
  data: [],
  error: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type){
      case FETCH_USERS_REQUEST:
          return { loading: true };
      case FETCH_USERS_FAILURE:
          return { loading: false, error: action.payload, data:[] };
      case FETCH_USERS_SUCCESS:
          return { loading: false, error: "", data: action.payload }     
      default:
        return state;
    }
}
const store = createStore(reducer);

// fetch users => axios.get("...") :
// redux-thunk