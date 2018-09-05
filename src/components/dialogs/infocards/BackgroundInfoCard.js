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

function BackgroundInfoCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                {/*<Typography className={classes.title} color="textSecondary">*/}
                {/*Whoops, I haven't migrated my blog over to this site yet!*/}
                {/*</Typography>*/}
                {/*<Typography variant="headline" component="h2">*/}
                <Typography className={classes.title} color="textSecondary">
                    <p>The first time I went to college, I started out pursuing a Physics degree then
                    switched to a Business Administration track.  I just flat did not know what I
                    wanted to do yet.</p>
                    <p>One summer, I took off for the West Coast in an old Buick with no brakes and
                    barely enough gas money to make it.  Ended up in Coos Bay, Oregon where I found a
                    summer job working in a seafood cannery.</p>
                    <p>After a ubiquitous stint at Bandon Dunes, I fell into an opportunity to join
                    a commercial fishing operation as a deckhand.  This lasted a few years but eventually
                    I had my fill and decided to return to school to wrap up my undergrad degree.</p>
                    <p>While I was running out my apartment lease, I filled in for a few crab trips
                    on a boat called the Western Seas out of Charleston, OR.  As fate would have it,
                    the captain and I hit it off, I decided to stay and fish "just one more year".</p>
                    <p>Seasons came and went, I fished, I traveled, it was a great life.  Eventually
                    I made my way to one of the top producing boats on the West Coast, the Cape Foulweather.</p>
                    <p>Despite my deep love for the ocean and the life of a highliner commercial fisherman,
                    I still felt an urge to complete university, I love to learn.  Taking classes as a fisherman
                    is brutal and finally a tough choice had to be made</p>
                    <p>After 10 years of terrifying storms, great friends and beautiful sunrises I sadly hung
                    up my boots and raingear.  There was a lot to be happy about though, I had discovered my
                    love for programming and and making digital things.</p>
                    <p>I was at a crossroads, bootcamps were becoming popular but I also wanted a thorough
                    understanding of computational concepts.  Ultimately I chose to bear the opportunity cost
                    of extra years working to pursue a Computer Science degree.</p>
                    <p>University CS classes were challenging, math classes were a grind sometimes, free time
                    was precious and fleeting.  However, I thrive on challenges and rose to the occasion once more,
                    graduating with a GPA I was proud of and more importantly, a much deeper understanding of computing
                    concepts</p>
                    <p>Now as an early career maker-of-software (Engineer? Developer? Programmer? Development Engineer?
                    Full Stack * ?), I'm thrilled to again have an ocean of opportunity in front of me.  I love making things
                    and I'm now armed with the knowledge to make it happen!</p>
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*<Button href="http://www.codecrab.me/" size="small">old blog</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

BackgroundInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackgroundInfoCard);