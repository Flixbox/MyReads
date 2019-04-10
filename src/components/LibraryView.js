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
    render () {
        const { classes } = this.props

        return (
            <Grid container className={classes.rootContainer}>
                <BookCollection
                    books={this.props.books}
                    updateShelf={this.props.updateShelf}
                />
            </Grid>
        )
    }
}

export default withStyles(styles)(LibraryView)