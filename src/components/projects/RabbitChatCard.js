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
import orange from '@material-ui/core/colors/orange';
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
        backgroundColor: orange[500],
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
                        <Avatar aria-label="Android Chat App" className={classes.avatar}>
                            A
                        </Avatar>
                    }
                    // action={
                    //     <IconButton>
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title="Android Chat App"
                    subheader="Android chat client with Express REST API and PGSQL database"
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
                        The only class project mentioned on here, this was a
                        group project which are infamous.  Our collaboration
                        however, went really well.  We rolled our own authentication
                        weather, location, messaging features and performed some
                        git triage. It was a great learning experience all around.
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
                            An ambitious term project for a 400-level senior elective, we
                            were squeezed as much into this project as we could.  An Agile
                            methodology was utilized with roughly 2 week sprints,
                            regular deliverables, Scrums, a rotating PM, backlog grooming
                            meetings, design meetings, a Kanban board and I'm sure I'm forgetting
                            at least a few things.  We also had to draft and agree to code
                            conventions and try to find workable meeting times.  It was a
                            very rich learning experience.

                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            We used a lot of research and these technologies :
                            Node.js, PostgreSQL, Express.js, git, Android SDK (I think Maven and
                            Gradle may be implicit), Linux, and Heroku.  Firebase was <em>not used</em>,
                            we rolled our own and in the process learned how difficult that can be.
                            A Material Design aesthetic for the UI was cobbled together and some of it even
                            worked.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                           Portions I contributed to included implementing the RecyclerView, structuring
                            the Express endpoints schema, various queries, coordinating git "mega-merges"
                            before presenting deliverables and implementing all callbacks.  It was a
                            really interesting learning experience.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Future plans for this project:
                            After forking, I will probably switch over to Firebase for authentication as I'm
                            now aware just how difficult auth is.  Once FishnGigs is live on desktop, Android
                            will be the next platform and this project may serve as a very rough template.  Or I
                            could look at the code I wrote 6 months ago and decide to scrap it and begin anew.
                        </Typography>
                        <Typography className={classes.typographyText}>
                            <a href="https://github.com/CSS450Group2/ProjectNodeService">Link to REST API</a>
                        </Typography>
                        <Typography className={classes.typographyText}>
                            <a href="https://github.com/CSS450Group2/ProjectMain">Link to front-end</a>
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