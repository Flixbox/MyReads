import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Book from './Book'

const styles = {
    rootContainer: {
        padding: "5px"
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
            <Grid item xs={12}>
                {this.props.books.map(book => {
                    return (
                        <Book
                            {...book}
                        />
                    )
                })}
            </Grid>
        )
    }
}

export default withStyles(styles)(BookCollection)