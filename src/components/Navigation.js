import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Toolbar, AppBar, Typography } from '@material-ui/core'
import { Link } from "react-router-dom"

const styles = {
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
 * This element represents the top navigation of the application.
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
                        <Toolbar className={classes.navBar}>
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