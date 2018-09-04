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
import green from '@material-ui/core/colors/green';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        //maxWidth: 400,
    },
    media: {
        // height: 0,
        // paddingTop: '56.25%', // 16:9
        objectFit: 'cover',
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
        backgroundColor: green[500],
    },
    typographyText: {
        textAlign: 'left',

    },
});

class RabbitChatCard extends React.Component {
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
                        <Avatar aria-label="Tacoma Tech API" className={classes.avatar}>
                            T
                        </Avatar>
                    }
                    // action={
                    //     <IconButton>
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title="Tacoma Tech Info API"
                    subheader="Tacoma tech ecosystem listings"
                />
                {/*<CardMedia*/}
                {/*className={classes.media}*/}
                {/*image="./crustys.jpg"*/}
                {/*title="mmmmmmmmmm"*/}
                {/*/>*/}
                {/*<CardMedia*/}
                {/*component="img"*/}
                {/*className={classes.media}*/}
                {/*height="170"*/}
                {/*image= "./crustys.jpg"*/}
                {/*title="Contemplative Reptile"*/}
                {/*/>*/}
                <CardContent>
                    <Typography className={classes.typographyText} component="p">
                        This began as solely an Express REST API to aggregate
                        information and serve endpoints for anyone interested in
                        creating front-end side projects. A React front-end was added later.
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
                        <Typography className={classes.typographyText} paragraph>
                            There is no single source of info I could find which held
                            all the info I was interested in about Tacoma's tech scene.
                            So...I made one!  My hope was this could also serve as a
                            back-end service for other people's side projects as needed.
                            The front-end is public but I still need to refactor the back
                            to use config vars before it's made public, however I'm
                            happy to share the API code as needed.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Here's a full list of all the technologies used so far:
                            Node.js, PostgreSQL, Express.js, git, React.js, Redux
                            , yarn, Linux, and Heroku.
                            A Material Design aesthetic with the material-ui module directs the UI.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            I opened up the React front-end of this project to Code Tacoma members
                            in the event anyone was interested in collaborating so I could
                            learn and boost my team project experience.  Two other members
                            contributed as indicated in the project's git history.  As the
                            master branch stands now, there are tools and libraries implemented
                            which are a bit beyond my current React grok-level.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Future technologies getting integrated to this project:
                            I've decided to fork this project so I can get some practice
                            implementing the portions done by other contributors.
                            Docker (I'm still tuning my "compose" skills), Travis & Jenkins
                            (I'm getting better at this CI/CD thing), a back-end caching
                            module (have not decided on one quite yet).
                            The long-term plan for this project includes implementing a server-less
                            architecture, probably with AWS Lambda as well as aggregation of data
                            through some API calls to resources like TechCrunch, MapServer and others..
                        </Typography>
                        <Typography className={classes.typographyText}>
                            <a href="http://www.codetacoma.org">Link to REST API</a>
                        </Typography>
                        <Typography className={classes.typographyText}>
                            <a href="http://www.codetacoma.xyz/">Link to front-end</a>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

RabbitChatCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RabbitChatCard);