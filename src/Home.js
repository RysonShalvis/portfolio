import React, { Component } from 'react';
import Homepage from './HomePage';
import FeaturedProjects from './FeaturedProjects';


class Home extends Component {
    render() {
        return (
            <div>
                <Homepage />
                <FeaturedProjects />
            </div>
        );
    }
}

export default Home;