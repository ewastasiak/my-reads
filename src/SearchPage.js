import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI'

import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateResults(query);
  }

updateResults = (query) => {
  if (query) {
    BooksAPI.search(query).then((results) => {
      //error handling ternary for search
      results.error ?
      this.setState({ results: [] }) :
      this.setState({ results: results })
    })
  } else {
    this.setState({ results: [] });
  }
}




  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map(result => (
                <li key={result.id}>
                <Book
                book={result}
                changeShelves={this.props.changeShelves}
                />

                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
