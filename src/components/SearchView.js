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
 *  This represents the main application next to the navigation component.
 *  
 * @export
 * @class MainView
 * @extends {Component}
 */
class SearchView extends Component {

    state = {
        searchString: '',
        books: []
    }

    handleSearch = e => {
        const newSearchString = e.target.value
        this.setState(prevState => ({
            ...prevState,
            searchString: newSearchString
        }))
        this.searchBooks(newSearchString)
    }

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
                />
            </Grid>
        )
    }
}

export default withStyles(styles)(SearchView)