import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import BookCollection from './BookCollection'

const styles = {
    rootContainer: {
        padding: "5px"
    }
}

/**
 *  This represents the main application next to the navigation component.
 *  
 * @export
 * @class MainView
 * @extends {Component}
 */
class LibraryView extends Component {
    shelves = ["currentlyReading", "wantToRead", "read"]
    translation = {
        "currentlyReading": "Currently Reading",
        "wantToRead": "Want to read",
        "read": "Read"
    }

    renderShelf = (shelf, books) => {
        return (
            <Grid container justify="center">
                <Typography variant="h5" gutterBottom>
                    {shelf}
                </Typography>
                <BookCollection
                    books={books}
                    updateShelf={this.props.updateShelf}
                />
            </Grid>
        )
    }

    render () {
        const { classes } = this.props

        return (
            <Grid container className={classes.rootContainer}>
                {
                    this.shelves.map(shelf => {
                        return this.renderShelf(
                            shelf, 
                            this.props.books.filter(book => book.shelf === shelf)
                        )
                    })
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(LibraryView)