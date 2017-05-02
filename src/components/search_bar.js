import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className='text-center'>
        <input className='form-control has-error'
          id='search-input'
          placeholder='Search Youtube'
          autofocus='true'
          value= {this.state.term}
          onChange= {event => this.onInputChange(event.target.value)}
        /> <br />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
