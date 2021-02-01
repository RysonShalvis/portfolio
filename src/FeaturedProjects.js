import React, { Component } from 'react';
import trickImage from './Trick-screen-1.png';

class FeaturedProjects extends Component {
    render() {
        return (
            <div>
                <p className="featured-project-title">FEATURED PROJECT</p>
                <div className="under-line"></div>
                
                <div className="featured-project-ctn">
                    <div className="img-ctn">
                        <img src={trickImage} alt="The Trick Creator Website" className="trick-creator"/>
                    </div>
                    <div className="featured-project-summary-ctn">
                        <h1 className="featured-project-name">Trick Creator</h1>
                        <h2 className="featured-project-summary">A simple game that allows you to combine tricks to make more and more complex tricks.</h2>
                        <h2 className="more-info">(lightbulb)OWN CONCEPT</h2>
                        <h2 className="more-info">(computer)BUILT FROM SCRATCH</h2>
                        <h2 className="more-info">(html tags)REACT, JAVASCRIPT, CSS, AND JSX</h2>
                        <button className="project-details btn">View Details</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default FeaturedProjects;