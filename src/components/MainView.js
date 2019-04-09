import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'
import { Route } from "react-router-dom"

import Library from "./Library"
import Search from "./Search"

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
                <Route exact path="/" component={Library} />
                <Route path="/search" component={Search} />
            </div>
        )
    }
}

export default withStyles(styles)(MainView)