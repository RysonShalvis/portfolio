import React, { Component } from 'react';
import me from './My Picture.jpg';


class HomePage extends Component {

    onClick() {
        const anchor = document.querySelector('#projects')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div className="homepage">
                <div className="home-ctn-mobile mobile">
                    <div className="intro-ctn-mobile">
                        <h1>Hey, I'm Ryson.</h1>
                        <div className="intro-summary-mobile">A Web Developer from Salt Lake City, Utah. I code websites as a passion of mine.</div>
                        <button style={{margin: '20px'}} onClick={this.onClick} className="project-btn btn">My Projects</button>
                    </div>
                    <div className="picture-ctn-mobile">
                        <img src={me} alt="Ryson Shalvis" className="profile-picture-mobile"/>
                    </div>
                </div>
                <div className="home-ctn desktop">
                    
                    <div className="intro-ctn">
                        <h1 className="intro-name">Hey, I'm Ryson.</h1>
                        <h2 className="intro-summary">A Web Developer from Salt Lake City, Utah. I code websites as a passion of mine.</h2>
                        <button onClick={this.onClick} className="project-btn btn">My Projects</button>
                    </div>
                    <div className="picture-ctn">
                        <img src={me} alt="Ryson Shalvis" className="profile-picture"/>
                    </div>
                    
                </div>
                <div className="diagonal"></div>
            </div>
        );
    }
}

export default HomePage;