import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const teams = [
  {
    id: "india",
    name: "India",
    jerseyColor: "blue"
  },
  {
    id: "australia",
    name: "Australia",
    jerseyColor: "yellow"
  },
  {
    id: "south-africa",
    name: "South Africa",
    jerseyColor: "pink"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (team) => {
  return replaceAll(team.name, ' ', '-');
};

class TeamApi {
  static getAllTeams() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], teams));
      }, delay);
    });
  }

  static saveTeam(team) {
    team = Object.assign({}, team); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTeamNameLength = 1;
        if (team.name.length < minTeamNameLength) {
          reject(`Name must be at least ${minTeamNameLength} characters.`);
        }

        if (team.id) {
          const existingTeamIndex = teams.findIndex(a => a.id == team.id);
          teams.splice(existingTeamIndex, 1, team);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          team.id = generateId(team);
          teams.push(team);
        }

        resolve(team);
      }, delay);
    });
  }

  static deleteTeam(teamId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTeamToDelete = teams.findIndex(team => {
            team.id == teamId;
        });
        teams.splice(indexOfTeamToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TeamApi;