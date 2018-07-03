import  * as actionTypes from './actionTypes';

export function createTeam(team) {
    return {type: actionTypes.CREATE_TEAM, team}; //type is required
}