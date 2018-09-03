import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
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
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class FishnGigsCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Fishin' gigs" className={classes.avatar}>
                            F
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="FishnGigs"
                    subheader="a jobs & information board for the commercial fishing industry"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/crustys.jpg"
                    title="mmmmmmmmmm"
                />
                <CardContent>
                    <Typography component="p">
                        Originally a monolith in Flask then later Django, FishnGigs is now a REST API
                        with a React front-end.  It lives in a private repo but I am happy to share the
                        code with potential employers.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {/*<IconButton aria-label="Add to favorites">*/}
                        {/*<FavoriteIcon />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="Share">*/}
                        {/*<ShareIcon />*/}
                    {/*</IconButton>*/}
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
                        <Typography paragraph variant="body2">
                            Background:
                        </Typography>
                        <Typography paragraph>
                            Niche industries like commercial fishing don't have
                            much in the way of online platforms, this project aims to
                            to help change that.
                        </Typography>
                        <Typography paragraph>
                            Here's a full list of all the technologies used so far:
                            Django Rest Framework (making Django, SQLite3 and Python rather implicit)
                            PostgreSQL, git, Linux, Digital Ocean and now Heroku as a platform.
                            A Material Design aesthetic with the material-ui module frames the UI.
                        </Typography>
                        <Typography paragraph>
                            Future technologies getting integrated to this project:
                            Redux (I've found it really insightful to start with using vanilla React
                            for a project then add Redux), react-router, Travis & Jenkins (I'm getting
                            better at this CI/CD thing), a back-end caching library (have not decided
                            on one quite yet) and Redis.
                            The long-term plan for this project includes  
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

FishnGigsCardCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FishnGigsCard);