import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'
import { Route } from "react-router-dom"

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
    render () {
        const { classes } = this.props

        return (
            <div>
                <Route exact path="/" component={LibraryView} />
                <Route path="/search" component={SearchView} />
            </div>
        )
    }
}

export default withStyles(styles)(MainView)