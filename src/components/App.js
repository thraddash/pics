import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

require('dotenv').config({ path: './../../.env' })

// refactor into class base component
// take onSearchSubmit method and pass it down to SearchBar as a prop
// prop can only go down
const api_key = process.env.REACT_APP_UNSPLASH_KEY;

// option 1: chaining .then() function (asynchronous)
// Axios returns an object call promise. 
// a promise will give a notification when some amount of work is completed like a request
// To get an indication that the request is completed use .then() function
// pass an arrow function inside .then function, so a callback will be invoked with whatever data
// from unsplash api .then((response) => {console.log(response.data.results);}); 

// option 2: add aysnc infront of onSearchSubmit() function name
// allows usage syntax await

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + api_key
      }  
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
    }
}

export default App;