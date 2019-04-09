import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

const styles = {
    rootContainer: {
        padding: "5px"
    },
    searchField: {

    }
}

/**
 * This represents a single book.
 *  
 * @export
 * @class Book
 * @extends {Component}
 */
class BookCollection extends Component {
    render () {
        const { classes } = this.props

        return (
            <Paper>
                Book
            </Paper>
        )
    }
}

export default withStyles(styles)(BookCollection)