import React, { Component } from 'react';
import fullpageInvision from './full-page-invision.png';

class FullpageInvision extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="full-page-yelp-ctn">
                <div className="yelp-intro">
                    Invison Clone
                </div>
                <div className="diagonal"></div>
                <div className="test">
                    <div className="redirect" id="projects"></div>
                    <img className="full-page-yelp" src={fullpageInvision} alt="Invision Clone website"/>     
                </div>
            </div>
        );
    }
}

export default FullpageInvision;