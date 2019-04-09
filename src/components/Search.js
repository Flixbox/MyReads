import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid } from '@material-ui/core'

const styles = {
    rootContainer: {
        padding: "5px"
    },
    searchField: {
        width: "100%"
    }
}

/**
 *  This represents the main application next to the navigation component.
 *  
 * @export
 * @class MainView
 * @extends {Component}
 */
class Search extends Component {
    render () {
        const { classes } = this.props

        return (
            <Grid container className={classes.rootContainer}>
                <Grid item xs={12}>
                    <TextField
                        label="Search"
                        className={classes.searchField}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Search)