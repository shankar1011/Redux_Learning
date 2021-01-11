const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
    loading: true,
    data: [],
    error: ''
}


//Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
            break;
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            break;
    }
}


// Async action creator
const fetchUsers = ()=> {
    // rather than returning normal object this action creator returns a function
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());