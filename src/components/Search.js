import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'

const styles = {

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
            <div>
                Search
            </div>
        )
    }
}

export default withStyles(styles)(Search)