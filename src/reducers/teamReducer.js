import  * as actionTypes from '../actions/actionTypes';

export default function teamReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.CREATE_TEAM:
            return [...state, Object.assign({}, action.team)];
        case actionTypes.LOAD_TEAMS_SUCCESS:
            return action.teams;
        default:
            return state;
    }
}