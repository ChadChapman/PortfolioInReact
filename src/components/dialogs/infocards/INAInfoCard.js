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

function INAInfoCard(props) {
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
                    <h3>Interests & Achievements</h3>
                    <p>Officer {bull} Upsilon Pi Epsilon, Academic Year 2017-2018</p>
                    <p>Academic Dean's List {bull} 5x - University of Washington Tacoma</p>
                    <p>Founder {bull} Code Tacoma - Tacoma's most active technology Meetup with 700+ members</p>
                    <p>Founder {bull} Tacoma CS Tutors - Online tutoring business</p>
                    <p>Eagle Scout</p>
                    {/*<p>{bull} {bull} {bull} {bull} {bull} {bull}</p>*/}
                    {/*<p>OK, you were warned</p>*/}
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*<Button href="http://www.codecrab.me/" size="small">old blog</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

INAInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(INAInfoCard);