import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid } from '@material-ui/core'
import { search } from '../BooksAPI'

import BookCollection from './BookCollection'

const styles = {
    rootContainer: {
        padding: "5px"
    },
    searchField: {

    }
}

/**
 *  This represents the search page. It allows the user to search for books.
 *  
 * @export
 * @class SearchView
 * @extends {Component}
 */
class SearchView extends Component {

    state = {
        searchString: '',
        books: []
    }

    /**
     * Triggered when the search field is updated.
     * This will fire a new search as long as the search field is filled.
     *
     * @memberof SearchView
     */
    handleSearch = e => {
        const newSearchString = e.target.value
        this.setState(prevState => ({
            ...prevState,
            searchString: newSearchString
        }))
        if(newSearchString.length) {
            this.searchBooks(newSearchString)
        } else {
            this.setState(prevState => ({
                ...prevState,
                books: []
            }))
        }
    }

    /**
     * This method will fire off an API request that searches for books.
     *
     * @memberof SearchView
     */
    searchBooks = searchString => {
        search(searchString).then( result => {
            let list = []
            if(result && result.length) {
                list = result
            }
            this.setState(prevState => ({
                ...prevState,
                books: list
            }))
        })
    }

    render () {
        const { classes } = this.props

        return (
            <Grid container className={classes.rootContainer}>
                <Grid item xs={12}>
                    <TextField
                        label="Search"
                        value={this.state.searchString}
                        className={classes.searchField}
                        autoFocus
                        fullWidth
                        onChange={this.handleSearch}
                    />
                </Grid>
                <BookCollection
                    books={this.state.books}
                    updateShelf={this.props.updateShelf}
                />
            </Grid>
        )
    }
}

export default withStyles(styles)(SearchView)