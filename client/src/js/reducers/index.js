import { SET_LOGGED_IN } from '../constants/action-types';

const initialState = {
    isLoggedIn: true
}

function rootReducer(state = initialState, action){
    if(action.type === SET_LOGGED_IN){
        return Object.assign({}, {
            isLoggedIn: action.payload
        });
    }
    return state;
}

export default rootReducer;