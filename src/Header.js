import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="header-ctn">
                <h1 className="header-name">Ryson Shalvis</h1>
                <p>This is a work in progress, not all features will be available!</p>
                <div className="nav-link-ctn">
                    <a href="./"><h2 className="nav-link">Home</h2></a>
                    <a href="#projects"><h2 className="nav-link">Projects</h2></a>
                    <a href="#contact"><h2 className="nav-link">Contact</h2></a>
                </div>
            </div>
        );
    }
}

export default Header;