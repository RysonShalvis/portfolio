import React, { Component } from 'react';
import fullpageYelp from './Full-page-yelp.png';

class YelpApi extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="full-page-yelp-ctn">
                <div className="yelp-intro">
                    Yelp API
                </div>
                <div className="diagonal"></div>
                <div className="test">
                <div className="redirect" id="projects"></div>
                    <img className="full-page-yelp" src={fullpageYelp} alt=""/>
                </div>
                
            </div>
        );
    }
}

export default YelpApi;