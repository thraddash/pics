import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// refactor into class base component
// take onSearchSubmit method and pass it down to SearchBar as a prop
// prop can only go down

// option 1: chaining .then() function (asynchronous)
// Axios returns an object call promise. 
// a promise will give a notification when some amount of work is completed like a request
// To get an indication that the request is completed use .then() function
// pass an arrow function inside .then function, so a callback will be invoked with whatever data
// from unsplash api .then((response) => {console.log(response.data.results);}); 

// option 2: add aysnc keyword infront of onSearchSubmit() function name
// allows usage syntax await keyword in front network request

class App extends React.Component {
  //set api data into a component state, to cause the component to re-render
  // create new state with images property, empty array
  state = { images: [] };

  // turn onSearchSubmit() into arrow function
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    // pass list of results to state object "images", causing component to re-render
    // print out images count 
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
    }
}

export default App;