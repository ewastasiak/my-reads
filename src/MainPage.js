import React, { Component } from 'react';

//Import Book component into MainPage component
import Book from './Book';
// this.props.books;

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  //bookshelf???
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
    <Book
    book={book}
    changeShelves={this.props.changeShelves}

    />
                      </li>
                    ))
                }

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  //bookshelf???
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
    <Book
    book={book}
    changeShelves={this.props.changeShelves}
    />
                      </li>
                    ))
                }

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  //bookshelf???
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
      <Book
      book={book}
      changeShelves={this.props.changeShelves}
      />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default MainPage;
