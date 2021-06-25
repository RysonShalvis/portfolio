import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    onProjects() {
        const anchor = document.querySelector('#projects')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onContact() {
        const anchor = document.querySelector('#contact')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div>
                <div className="header-ctn-mobile mobile">
                    <h1>Ryson Shalvis</h1>
                    <div className="hamburger-icon-ctn">
                        <div className="hamburger-icon"></div>
                        <div className="hamburger-icon"></div>
                        <div className="hamburger-icon"></div>
                    </div>
                </div>
                <div className="header-ctn desktop">
                    <h1 className="header-name">Ryson Shalvis</h1>
                    <p>This is a work in progress, not all features will be available!</p>
                    <div className="nav-link-ctn">
                        <a href="./"><h2 className="nav-link">Home</h2></a>
                        <Link to="/"><h2 onClick={this.onProjects} className="nav-link">Projects</h2></Link>
                        <h2 onClick={this.onContact} className="nav-link">Contact</h2>
                    </div>
            </div>
            </div>
        );
    }
}

export default Header;