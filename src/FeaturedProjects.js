import React, { Component } from 'react';
import trickImage1 from './Trick-screen-1.png';
import trickImage2 from './Trick-screen-4.png';
import yelp from './yelp-api-screenshot.png';
import lightbulb from './lightbulb.png';
import invision from './invision-clone-screentshot.png';
import { Link } from 'react-router-dom';
 
class FeaturedProjects extends Component {
    render() {
        return (
            <div id="projects" className="featured-projects-ctn-ctn">
                <div className="diagonal"></div>
                <p className="featured-project-title">FEATURED PROJECTS</p>
                <div className="under-line"></div>
                
                <div className="featured-project-ctn">
                    <div className="img-ctn">
                        <img src={yelp} alt="The Trick Creator Website" className="trick-creator"/>
                    </div>
                    <div className="featured-project-summary-ctn">
                        <h1 className="featured-project-name">Yelp API</h1>
                        <h2 className="featured-project-summary">Search for different businesses in any location with reviews/ratings using an API from the Yelp Servers.</h2>
                        <div className="lightbulb-ctn">
                            <img src={lightbulb} alt="" className="lightbulb"/>
                            <h2 className="more-info">FULLY FUNCTIONAL</h2>
                        </div>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></svg>API AND SERVERS</h2>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"></path></svg>REACT.JS, CSS, AND JSX</h2>
                        <Link to="/portfolio/yelp-api">
                            <button className="project-details btn">View Details</button>
                        </Link>
                    </div>
                    
                </div>




                <div className="under-line underlines"></div>
                <div className="featured-project-ctn">
                    
                    <div className="featured-project-summary-ctn">
                        <h1 className="featured-project-name">Invision Clone</h1>
                        <h2 className="featured-project-summary">A perfect clone of Invision App's home website.</h2>
                        <div className="lightbulb-ctn">
                            <img src={lightbulb} alt="" className="lightbulb"/>
                            <h2 className="more-info">EXACT REPLICA</h2>
                        </div>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></svg>BUILT FROM SCRATCH</h2>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"></path></svg> JAVASCRIPT, CSS, AND HTML</h2>
                        <Link to="/portfolio/invision-clone">
                            <button className="project-details btn">View Details</button>
                        </Link>
                    </div>
                    <div className="img-ctn">
                        <img src={invision} alt="The Trick Creator Website" className="trick-creator"/>
                        
                    </div>
                    
                </div>



                <div className="third-underline under-line underlines"></div>
                <div className="featured-project-ctn">
                    <div className="img-ctn">
                        <img src={trickImage1} alt="The Trick Creator Website" className="trick-creator"/>
                        <img src={trickImage2} alt="The Trick Creator Website" className="trick-creator"/>
                    </div>
                    <div className="featured-project-summary-ctn">
                        <h1 className="featured-project-name">Trick Creator</h1>
                        <h2 className="featured-project-summary">A simple game that allows you to combine tricks to make more and more complex tricks.</h2>
                        <div className="lightbulb-ctn">
                            <img src={lightbulb} alt="" className="lightbulb"/>
                            <h2 className="more-info">OWN CONCEPT</h2>
                        </div>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></svg>BUILT FROM SCRATCH</h2>
                        <h2 className="more-info"><svg className="computer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"></path></svg>REACT, JAVASCRIPT, CSS, AND JSX</h2>
                        <Link to="/portfolio/trick-creator">
                            <button className="project-details btn">View Details</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default FeaturedProjects;