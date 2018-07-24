import React from 'react'
import { Route } from 'react-router-dom'


import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }
  state = {
    books: []
  }

//TODO:???
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

//create method to update state and pass it to mainpage.js file (<Book />) as props so the book component has access to the method, and method needs to be used in book.js (book componenet)
  changeShelves = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }


  render() {
      // console.log(this.state.books);
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MainPage
             books={this.state.books}
             changeShelves={this.changeShelves}
           />
        )}/>

        <Route path="/search" render={() => (
          <SearchPage
            changeShelves={this.changeShelves}
          />
        )}/>








      </div>
    )
  }



}

export default BooksApp
