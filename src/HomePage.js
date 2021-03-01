import React, { Component } from 'react';
import me from './My Picture.jpg';


class HomePage extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    onClick() {
        const anchor = document.querySelector('#projects')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div className="homepage">

                <div className="home-ctn">
                    
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