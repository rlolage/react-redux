import React, {PropTypes} from 'react';

const TeamListRow = ({team}) => {
    return (
        <tr key={team.id}>
            <td>{team.name}</td>
            <td>{team.jerseyColor}</td>
        </tr>
    );
};

TeamListRow.propTypes = {
    team: PropTypes.object.isRequired
};

export default TeamListRow;