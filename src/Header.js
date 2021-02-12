import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="header-ctn">
                <h1 className="header-name">Ryson Shalvis</h1>
                <div className="nav-link-ctn">
                    <h2 className="nav-link">Home</h2>
                    <h2 className="nav-link">Projects</h2>
                    <h2 className="nav-link">About</h2>
                    <h2 className="nav-link">Contact</h2>
                </div>
            </div>
        );
    }
}

export default Header;