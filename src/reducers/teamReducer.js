import  * as actionTypes from '../actions/actionTypes';

export default function teamReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.CREATE_TEAM:
            return [...state, Object.assign({}, action.team)];
        default:
            return state;
    }
}