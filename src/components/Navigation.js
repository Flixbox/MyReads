import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, SwipeableDrawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}

/**
 *  This code was mostly taken from https://material-ui.com/demos/drawers/.
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
                            <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                <ListItemIcon>{}</ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                            <Divider />
                            <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                <ListItemIcon>{}</ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                        </div>
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)