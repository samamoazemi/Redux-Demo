// async js =>
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = require("redux-thunk").default;
const axios = require("axios");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
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
        type: FETCH_USERS_SUCCESS,
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
          return { ...state, loading: true };
      case FETCH_USERS_FAILURE:
          return { loading: false, error: action.payload, data:[] };
      case FETCH_USERS_SUCCESS:
          return { loading: false, error: "", data: action.payload }     
      default:
        return state;
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
               const userId = res.data.map( u => u.id);
               dispatch(fetchUsersSuccess(userId));
          })
          .catch((error) => {
              dispatch(fetchUsersFailure(error));
          })
    }
}

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));

store.dispatch(fetchUsers());