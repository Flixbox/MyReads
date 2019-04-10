import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'
import { Route } from "react-router-dom"

import { update } from '../BooksAPI'

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
    updateShelf = (book, shelf) => {
        update({id: book}, shelf).then(() => {
            console.log("Updated Book", book)
            console.log("Updated Shelf", shelf)
        })
    }

    render () {
        const { classes } = this.props

        return (
            <div>
                <Route exact path="/" component={LibraryView} />
                <Route 
                    path="/search" 
                    render={
                        (props) => <SearchView {...props} updateShelf={this.updateShelf} />
                    }
                />
            </div>
        )
    }
}

export default withStyles(styles)(MainView)