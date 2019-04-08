import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, IconButton, Toolbar, AppBar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

/**
 * This code was mostly taken from https://material-ui.com/demos/drawers/.
 * Many adjustments were made.
 *  
 * @export
 * @class Navigation
 * @extends {Component}
 */
class Navigation extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        })
    }

    render () {
        const { classes } = this.props

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)