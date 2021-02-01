import React, { Component } from 'react';
import me from './My Picture.jpg'

class HomePage extends Component {
    render() {
        return (
            <div className="home-ctn">
                <div className="intro-ctn">
                    <h1 className="intro-name">Hey, I'm Ryson.</h1>
                    <h2 className="intro-summary">A Web Developer from Salt Lake City, Utah. I code websites as a passion of mine.</h2>
                    <button className="project-btn btn">My Projects</button>
                </div>
                <div className="picture-ctn">
                    <img src={me} alt="Ryson Shalvis" className="profile-picture"/>
                </div>
            </div>
        );
    }
}

export default HomePage;