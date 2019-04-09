import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Collapse, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classnames from 'classnames'

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
})

/**
 * This represents a single book. 
 * It provides all the information that was provided to it in an interactive way.
 * 
 * @see https://material-ui.com/demos/cards/
 *  
 * @export
 * @class Book
 * @extends {Component}
 */
class Book extends Component {
    state = { expanded: false }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }))
    }
    
    render () {
        const { 
            classes,
            title,
            description,
            imageLinks,
            subtitle
        } = this.props

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subtitle}
                />
                <CardMedia
                    className={classes.media}
                    image={imageLinks.thumbnail}
                    title="Book thumbnail"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default withStyles(styles)(Book)