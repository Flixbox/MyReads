import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid } from '@material-ui/core'

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

    handleSearch = e => {
        console.log(e)
        console.log(e.target.value)
    }

    render () {
        const { classes } = this.props

        return (
            <Grid container className={classes.rootContainer}>
                <Grid item xs={12}>
                    <TextField
                        label="Search"
                        className={classes.searchField}
                        autoFocus
                        fullWidth
                        onChange={this.handleSearch}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SearchView)