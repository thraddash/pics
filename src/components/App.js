import React from 'react';
import SearchBar from './SearchBar';

// refactor into class base component
// take onSearchSubmit method and pass it down to SearchBar as a prop
// prop can only go down

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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