import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        //minWidth: 275,
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function BlogInfoCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                {/*<Typography className={classes.title} color="textSecondary">*/}
                    {/*Code Tacoma, 700+ active techies in and around Tacoma*/}
                {/*</Typography>*/}
                {/*<Typography variant="headline" component="h2">*/}
                <Typography className={classes.title} color="textSecondary">
                    <h3>Code Tacoma, 700+ active techies in and around Tacoma</h3>
                    <p>I began Code Tacoma September, 2016 as a language and platform agnostic
                    organization to engage technical-types of all skill levels.  At the time I
                    did not imagine it would grow to this size or gain this much traction.</p>
                    {/*<p>{bull} {bull} {bull} {bull} {bull} {bull}</p>*/}
                    <p>The past few years have been wonderful, challenging and a great learning
                        experience.  We have expanded to include 3 Organizers of targeted
                        technology subsets including Data Science & Python, React and GIS.</p>
                    <p>A quick rundown of topics I have covered at events I've hosted:
                        unit testing, Test Driven Development, application development with Flask, TDD,
                        Machine Learning, Sentiment Analysis, git, Docker, whiteboarding algorithms
                        and data structure problems and there are likely a few things I'm not
                        remembering right now.</p>
                    <p>We have a collaborative project documenting and serving information about the
                        Tech "ecosystem" in and around Tacoma.  The goal is to eventually provide our community
                    with an interactive resource and also an open REST API for community members' side
                    projects. (It's on a Heroku free-tier still so load time may be slow if the dyno is
                    asleep :/)</p>
                    <p>We have recently begun collaboration with the Environmental Defense Fund
                        to create a data-intensive web app built on GIS data sets.  The goal of this
                    project is to implement a platform which allows the public to gain insights regarding
                    health and demographics info around targeted industrial sites.</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button href="https://www.meetup.com/Code-Tacoma/" size="small">Code Tacoma Meetup</Button>
            </CardActions>
            <CardActions>
                <Button href="https://github.com/CodeTacoma" size="small">Our Github</Button>
            </CardActions>
            <CardActions>
                <Button href="http://www.codetacoma.org/" size="small">Tacoma Tech Ecosystem</Button>
            </CardActions>
            <CardActions>
                <Button href="(https://join.slack.com/t/codetacomameetup/shared_invite/enQtMzQwMzYxNzk1NTU5LTJkZDY0OWVkNTdmYmI1MzVhNWVlNTVjMGJmMTIzOTRiNTZhMTZkMmE0MGY1MWY2YzJhMzM5N2I4ZGY0OWQ4OTc" size="small">Our slack</Button>
            </CardActions>
        </Card>
    );
}

BlogInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogInfoCard);