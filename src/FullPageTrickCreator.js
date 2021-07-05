import React, { Component } from 'react';
import trick1 from './Trick-creator-screen-shots/Trick-screen-1.png';
import trick2 from './Trick-creator-screen-shots/Trick-screen-2.png';
import trick3 from './Trick-creator-screen-shots/Trick-screen-3.png';
import trick4 from './Trick-creator-screen-shots/Trick-screen-4.png';
import trick5 from './Trick-creator-screen-shots/Trick-screen-5.png';
import trick6 from './Trick-creator-screen-shots/Trick-screen-6.png';

class FullPageTrickCreator extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="full-page-yelp-ctn">
                <div className="yelp-intro">
                    Trick Creator
                </div>
                <div className="diagonal"></div>
                <div className="test">
                <div className="redirect" id="projects"></div>
                    <div className="full-page-yelp">
                        <img className="trick-creator-img" src={trick1} alt="trick creator"/>
                        <img className="trick-creator-img" src={trick2} alt="trick creator"/>
                        <img className="trick-creator-img" src={trick3} alt="trick creator"/>
                        <img className="trick-creator-img" src={trick4} alt="trick creator"/>
                        <img className="trick-creator-img" src={trick5} alt="trick creator"/>
                        <img className="trick-creator-img" src={trick6} alt="trick creator"/>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default FullPageTrickCreator;