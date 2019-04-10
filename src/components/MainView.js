import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'
import { Route } from "react-router-dom"

import { update, getAll } from '../BooksAPI'

import LibraryView from "./LibraryView"
import SearchView from "./SearchView"

const styles = {

}

/**
 *  This represents the main application next to the navigation component.
 *  
 * @export
 * @class MainView
 * @extends {Component}
 */
class MainView extends Component {

    state = {
        books: []
    }

    updateShelf = (book, shelf) => {
        if(shelf === "") shelf = "none"
        update({id: book}, shelf).then(() => {
            this.getAll()
        })
    }

    /**
     * This is a performance-critical function that searches all shelves for the book.
     * 
     * @returns The shelf that this book is on, or an empty string.
     * @memberof MainView
     */
    searchLibrary = (id) => {
        const result = this.state.books.filter(book => {
            if(book.shelf && book.id === id) return book.shelf
            return false
        })
        if(result.length) {
            return result[0].shelf
        }
    }

    /**
     * This fires off a request to get the user's entire library.
     *
     * @memberof MainView
     */
    getAll = () => {
        getAll().then(books => {
            this.setState(prevState => ({
                ...prevState,
                books: books
            }))
        })
    }

    componentDidMount() {
        this.getAll()
    }

    render () {
        return (
            <div>
                <Route 
                    exact 
                    path="/" 
                    render={
                        (props) => 
                            <LibraryView 
                                {...props} 
                                books={this.state.books} 
                                updateShelf={this.updateShelf} 
                                searchLibrary={this.searchLibrary}
                            />
                    }
                />
                <Route 
                    path="/search" 
                    render={
                        (props) => 
                            <SearchView 
                                {...props} 
                                updateShelf={this.updateShelf} 
                                searchLibrary={this.searchLibrary}
                            />
                    }
                />
            </div>
        )
    }
}

export default withStyles(styles)(MainView)