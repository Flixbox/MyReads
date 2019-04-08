import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {  } from '@material-ui/core'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
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

            </div>
        )
    }
}

export default withStyles(styles)(MainView)