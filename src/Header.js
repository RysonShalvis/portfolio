import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opened: false,
            close: 'closed'
        }
        
        this.menuClicked = this.menuClicked.bind(this);
        this.animationEnd = this.animationEnd.bind(this);

    }

    onProjects() {
        const anchor = document.querySelector('#projects')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onContact() {
        const anchor = document.querySelector('#contact')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    menuClicked() {
       this.setState({opened: this.state.opened ? false : true, close: 'closing'})
        
    }

    animationEnd(e) {
        if (e.target.classList[0] === 'closing') {
            this.setState({close: 'closed'})
        }
    }

    render() {
        return (
            <div>
                <div className="header-ctn-mobile mobile">
                    <h1>Ryson Shalvis</h1>
                    <div onClick={this.menuClicked} className="hamburger-icon-ctn">
                        <div className={`${this.state.opened ? 'hamburger-open' : 'hamburger-closed'} hamburger-icon`}></div>
                        <div className={`${this.state.opened ? 'hamburger-open' : 'hamburger-closed'} hamburger-icon`}></div>
                        <div className={`${this.state.opened ? 'hamburger-open' : 'hamburger-closed'} hamburger-icon`}></div>
                    </div>
                    <div onAnimationEnd={this.animationEnd} className={`${this.state.opened ? 'opened' : this.state.close} nav-link-ctn-mobile`}>
                        <a href="./"><h2 className="nav-link-mobile">Home</h2></a>
                        <Link to="/"><h2 onClick={this.onProjects} className="nav-link-mobile">Projects</h2></Link>
                        <h2 onClick={this.onContact} className="nav-link-mobile">Contact</h2>
                    </div>
                    
                </div>
                <div className="header-ctn desktop">
                    <h1 className="header-name">Ryson Shalvis</h1>
                    <p className="disclaimer">This is a work in progress,<br/> not all features will be available!</p>
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