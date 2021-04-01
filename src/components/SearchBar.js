import React from 'react';

// Class base component

class SearchBar extends React.Component {
    state = { term: '' };
    // refactor, store value in component than in DOM
    render() {
        return (
          <div className="ui segment">
              <form className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                      value = {this.state.term} 
                      onChange={e => this.setState({ term: e.target.value})} 
                    />
                  </div>
              </form>
          </div>
        );
    }
}

export default SearchBar;