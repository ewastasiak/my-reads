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



   BooksAPI.update(book, shelf).then(() => {
     BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
      })
   });

  }



  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }




  render() {
      console.log(this.state.books);
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
