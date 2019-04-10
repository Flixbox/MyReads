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
                            />
                    }
                />
            </div>
        )
    }
}

export default withStyles(styles)(MainView)