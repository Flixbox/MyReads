import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Book from './Book'

const styles = {
    rootContainer: {
        margin: '16px'
    },
    searchField: {

    }
}

/**
 * This represents a number of books, displayed in a single shelf.
 * This component must be in a Material UI Container.
 *  
 * @export
 * @class BookCollection
 * @extends {Component}
 */
class BookCollection extends Component {
    render () {
        const { classes } = this.props

        return (
            <Grid container spacing={16} className={classes.rootContainer} justify="center">
                {this.props.books.map(book => {
                    return (
                        <Grid item key={book.id}>
                            <Book
                                {...book}
                                updateShelf={this.props.updateShelf}
                                searchLibrary={this.props.searchLibrary}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

export default withStyles(styles)(BookCollection)