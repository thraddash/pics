import React from 'react';
/* Class base component - controlled
User types input
Callback onChange invoked
pulled current value from event object (e) by referencing event.target.value 
update the setState term with that value
render method is automatically re-render when setState is called
when component re-renders, the value prop of the input tag is going to be overwritten
*/

class SearchBar extends React.Component {
    state = { term: '' };
    // disable page from automatically submitting or refreshing
    // add onSubmit event handler with reference callback method this.onFormSubmit
    // add event.preventDefault()
    
    // Solution 1: Using constructor, bind onFormSubmit function
    /*
    constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    /*

    // Solution 2: add arrow function, automatically bind the value 
    // of this, so that it is always equal to instance of the SearchBar
    /*
    onFormSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.term);
    }
    */
   
    /* Solution 3: pass arrow function directly into onSubmit callback
    {(event) => this.onFormSubmit(event) } gets invoke and pass to event object
    */

    onFormSubmit(event) {
      event.preventDefault();
      console.log(this.state.term);
    }
    
    render() {
        return (
          <div className="ui segment">
              <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                  <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                      value = {this.state.term} 
                      onChange={e => this.setState({ term: e.target.value })} 
                    />
                  </div>
              </form> 
          </div>
        );
    }
}

export default SearchBar;