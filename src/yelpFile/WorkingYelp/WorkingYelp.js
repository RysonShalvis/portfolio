import React from 'react';
//import logo from '/Users/rysonshalvis/Desktop/Coding Projects/Codecademy Projects/ravenous_react/src/logo.svg';
import './WorkingYelp.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../util/yelp';

class WorkingYelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      searchCheck: ''
    }
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp(term,location,sortBy) {
    if (term && location) {

      Yelp.search(term,location,sortBy).then(businesses => {
        this.setState({
          businesses: businesses
        })
      })
    } else {
      this.setState({
        searchCheck: 'Please fill out both search fields'
      })
    }
  }
  render() {
    
    return (
      <div className="working-yelp">
        <h1 className="h1">Yelp API</h1>
        
        <SearchBar searchCheck={this.state.searchCheck} searchYelp={this.searchYelp}/>
        <BusinessList business={this.state.businesses} />
      </div>
    );
  }
}

export default WorkingYelp;
