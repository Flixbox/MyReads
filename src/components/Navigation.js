import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, IconButton, Toolbar, AppBar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
        textDecoration: 'none',
        color: 'white'
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
                        
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                MyReads
                            </Typography>
                            <Link to="/" className={classes.menuButton}>
                                <Button color="inherit">Library</Button>
                            </Link>
                            <Link to="/search" className={classes.menuButton}>
                                <Button color="inherit">Search</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)