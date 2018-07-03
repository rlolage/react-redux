import  * as actionTypes from './actionTypes';
import teamApi from '../api/mockTeamApi';

export function createTeam(team) {
    return {type: actionTypes.CREATE_TEAM, team}; //type is required
}

export function loadTeamsSuccess(teams) {
    return {type: actionTypes.LOAD_TEAMS_SUCCESS, teams}; //type is required
}

export function loadTeams() {
    return function(dispatch) {
        return teamApi.getAllTeams().then(teams => {
            dispatch(loadTeamsSuccess(teams));
        }).catch(error => {
            throw(error);
        });
    };
}