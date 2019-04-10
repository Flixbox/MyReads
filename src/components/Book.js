import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Chip, Typography, Select, MenuItem, Collapse, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import classnames from 'classnames'



const styles = theme => ({
    card: {
        maxWidth: 250
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
 * The transformation and preset are taken from the link below.
 * 
 * @see https://material-ui.com/demos/cards/
 *  
 * @export
 * @class Book
 * @extends {Component}
 */
class Book extends Component {
    state = { expanded: false }

    /**
     * This is executed when the user expand the book card.
     *
     * @memberof Book
     */
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }))
    }

    /**
     * This is executed when the user moves a book between shelves.
     *
     * @memberof Book
     */
    handleShelf = (e, child) => {
        this.props.updateShelf(child.props.id, child.props.value)
    }

    /**
     * This returns a Select element that can be used to move a book between shelves.
     *
     * @memberof Book
     */
    renderShelf = (shelf, id) => {
        if(!shelf) shelf = ""
        return (
            <Select
                value={shelf}
                onChange={this.handleShelf}
                displayEmpty
                name="shelf"
            >
                <MenuItem value="" id={id}>None</MenuItem>
                <MenuItem value="currentlyReading" id={id}>Currently reading</MenuItem>
                <MenuItem value="wantToRead" id={id}>Want to read</MenuItem>
                <MenuItem value="read" id={id}>Read</MenuItem>
            </Select>
        )
    }

    render () {
        let { 
            id,
            classes,
            title,
            authors,
            categories,
            description,
            imageLinks,
            subtitle,
            shelf
        } = this.props

        if(!authors) authors = ["Unknown"]
        if(!categories) categories = []
        if(!shelf) shelf = this.props.searchLibrary(id)

        let image = <div></div>
        if(imageLinks) {
            image = <CardMedia
                className={classes.media}
                image={imageLinks.thumbnail.replace(/^http:\/\//i, 'https://')}
                title="Book thumbnail"
            />
        }

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subtitle}
                />
                {image}
                <CardContent>
                    {categories.map(category => 
                        <Chip label={category} key={category} />
                    )}
                    <Typography component="p">
                        Authors:
                    </Typography>
                    <Typography component="p">
                        {authors.join(', ')}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {this.renderShelf(shelf, id)}
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