import React from "react";

class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About USA Cricket</h1>
                <br/>
                <p>USA Cricket is the home of all the cricket matches happening in the USA</p>
                <ul>
                    <li>Swades Premier League</li>
                    <li>Tennis Ball Cricket Association (TCA)</li>
                    <li>CricBay</li>
                </ul>
            </div>
        );
    }       
}

export default AboutPage;