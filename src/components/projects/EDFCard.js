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
import teal from '@material-ui/core/colors/teal';
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
        backgroundColor: teal[500],
    },
    typographyText: {
        textAlign: 'left',

    },
});

class EDFCard extends React.Component {
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
                        <Avatar aria-label="EDF Web App" className={classes.avatar}>
                            E
                        </Avatar>
                    }
                    // action={
                    //     <IconButton>
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title="EDF GIS Data Web App"
                    subheader="Environmental Defense Fund targeted health and demographics
                    info portal"
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
                        Through the connections of a Code Tacoma member, we have partnered
                        with the EDF to create a data-intensive web application.  GIS data
                        will be the foundation with the aim of drawing insights and
                        educating the public in regards to the externalities of specific
                        industry practices.  This is a really exciting opportunity for
                        cross-pollination between GIS, software, data science and UX disciplines.
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
                            This is a green field project with a client who is open and grateful to be
                            working with us.  It should be quite a ride with a steep learning curve.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Here's a full list of all the technologies used so far:
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            .....just kidding, we are still in the planning and architecture
                            stages.  Technologies for now include pens, dry-erase markers,
                            napkins and notebooks.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Some concerns we are aware of on this project:
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            It must be maintainable,
                            the last thing we want is to give the EDF something that will break in a
                            year and cost them resources or force them to drop the application.
                            We are also aware the contributors will likely be working asynchronously,
                            so VCS and project conventions will be crucial to keeping this as
                            time-efficient as possible.
                        </Typography>
                        <Typography className={classes.typographyText} paragraph>
                            Planning docs will be linked as they are agreed on.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

EDFCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EDFCard);