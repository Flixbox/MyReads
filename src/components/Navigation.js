import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, IconButton, SwipeableDrawer, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography } from '@material-ui/core'
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
                <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <div className={classes.list}>
                            <ListItem button>
                                <ListItemText primary="Library" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary="Search" />
                            </ListItem>
                            <Divider />
                        </div>
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)