import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI';

import Book from './Book';

class SearchPage extends Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
      this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) => {
    if (query) {
    //fetch the books
    BooksAPI.search(query).then((searchedBooks) => {
      this.setState({ searchedBooks: searchedBooks })
    })

  } else {
    this.setState({ searchedBooks: [] })
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
{this.state.searchedBooks.map(searchedBook => (
  <li key={searchedBooks.id}>
  <Book
    book={searchedBooks}
  />
  </li>
))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
