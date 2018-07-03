import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>USA Cricket</h1>
                <p>Home of the USA cricket team and fans</p>
                <Link to="about" className="btn btn-light btn-lg">Learn More</Link>
            </div>
        );
    }       
}

export default HomePage;