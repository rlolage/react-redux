import React, {PropTypes} from 'react';
import TeamListRow from './TeamListRow';

const TeamList = ({teams}) => {
    return (
        <div>
            <h1>Teams</h1>
            <table className="table table-striped table-hover">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Jersey Color</th>
                </tr>
            </thead>
            <tbody>
                {teams.map(team =>
                    <TeamListRow key={team.id} team={team}/>
                )}
            </tbody>
        </table>
    </div>
    );
};

TeamList.propTypes = {
    teams: PropTypes.array.isRequired
};

export default TeamList;