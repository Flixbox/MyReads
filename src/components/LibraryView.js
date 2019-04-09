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
class LibraryView extends Component {
    render () {
        const { classes } = this.props

        return (
            <div>
                Library
            </div>
        )
    }
}

export default withStyles(styles)(LibraryView)