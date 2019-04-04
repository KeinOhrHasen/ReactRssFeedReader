import { SET_CURRENT_USER } from '../constants/types';

const initialState = {
    isAuthenticated: (!!localStorage.getItem("token")),
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:  (!!localStorage.getItem("token")),
                user: action.payload
            }
        default: 
            return state;
    }
}