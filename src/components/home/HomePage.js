import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>Cric Nation</h2>
                <p>Home of cricket teams and fans</p>
                <Link to="about" className="btn btn-info btn-lg">Learn More</Link>
            </div>
        );
    }       
}

export default HomePage;