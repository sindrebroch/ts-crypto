import initialState from './initialState';
import {
    FETCH_COINS_BEGIN,
    FETCH_COINS_SUCCESS,
    FETCH_COINS_FAILURE,
} from '../actions/actionTypes';

const coinReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case FETCH_COINS_BEGIN:
            console.log("FETCH COINS BEGIN")
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_COINS_SUCCESS:
            console.log("FETCH COINS SUCCESS")
            return {
                ...state,
                loading: false,
                coins: action.coins
            };

        case FETCH_COINS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                coins: []
            };

        default: 
            return state;
    }
}

export default coinReducer;