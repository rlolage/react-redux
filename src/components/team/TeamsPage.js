import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as teamActions from '../../actions/teamActions';
import {bindActionCreators} from 'redux';

class TeamsPage extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {team: {name: ""}};

        //Do the binds in the constructor. No autobinding in ES6.
        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const team = this.state.team;
        team.name = event.target.value;
        this.setState({team: team});
    }

    onClickSave(event) {
        this.props.actions.createTeam(this.state.team);
    }

    teamRow(team, index) {
        return <div key={index}>{team.name}</div>;
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Teams</h1>
                {this.props.teams.map(this.teamRow)}
                <h2>Add a Team</h2>
                <input 
                    type="text" 
                    onChange={this.onNameChange}
                    value={this.state.team.name}/>
                <input 
                    type="submit" 
                    value="Save"
                    onClick={this.onClickSave}/>
            </div>
        );
    }
}

TeamsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    teams: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        teams: state.teams
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(teamActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage);