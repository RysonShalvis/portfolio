import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact-ctn">
                <div className="left-diagonal"></div>
                <div className="contact-wrapper">
                    <h1 className="contact-me">Contact Me</h1>
                    <h2 className="cont-info">RYSONSHALVIS@GMAIL.COM</h2>
                    <h2 className="cont-info">LINKEDIN.COM/IN/RYSONSHALVIS</h2>
                    <h2 className="cont-info">GITHUB.COM/RYSONSHALVIS</h2>
                    <a href="www.google.com"><h2 className="cont-info">801-831-9170</h2></a>
                </div>
            </div>
        );
    }
}

export default Contact;