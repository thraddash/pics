import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

require('dotenv').config({ path: './../../.env' })

// refactor into class base component
// take onSearchSubmit method and pass it down to SearchBar as a prop
// prop can only go down
const api_key = process.env.REACT_APP_UNSPLASH_KEY;

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + api_key
      }  
    });
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