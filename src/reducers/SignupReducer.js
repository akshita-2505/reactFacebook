import { initState } from './IntialState';
import * as Types from '../actions';

export default (state=initState, action) => {
    switch(action.type){
        case Types.SIGNUP_WITH_FIREBASE:
            return ({...state, signUp: action.payload});
        case Types.LOGIN_WITH_FIREBASE:
            return ({...state, login: action.payload});
        default: return state
    }
}
