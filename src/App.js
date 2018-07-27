import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  changeShelves = (book, shelf) => {

    //find the book by id, compare old to new state
    //change its individual shelf value

    const oldBookState = JSON.stringify(this.state.books);

    const newBookState = this.state.books.map(oldBooksState => {
      if (book.id === oldBookState.id) {
        oldBookState.shelf = shelf;
      }
      return oldBookState
    })

    this.setState({ books: newBookState });

    BooksAPI.update(book, shelf).catch(() => {
      this.setState({books:JSON.parse(oldBookState)})
    });


    return (

      BooksAPI.update(book, shelf).then((shelf) => {

        BooksAPI.getAll().then((books) => {
                this.setState({ books: books });
              })

      // console.log(`"${book.title}" with id ${book.id} is in "${book.shelf}" now.
      // ${this.state.books.length}`);
      })
    );

  }



  componentDidMount() {
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
            books={this.state.books}
            changeShelves={this.changeShelves}
          />
        )}/>


      </div>
    )
  }



}

export default BooksApp
