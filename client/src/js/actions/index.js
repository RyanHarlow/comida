import {SET_LOGGED_IN} from '../constants/action-types';

export function setLoggedIn(payload){
    return {type: SET_LOGGED_IN, payload}
}