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

function EduInfoCard(props) {
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
                    <p>University of Washington, Bachelor's of Science in Computer Science</p>
                    <p>Clubs: Upsilon Pi Epsilon Computing Honors Society, Huscii Coding, Women
                    in Computer Science</p>
                    <p>TA for TCSS 343, Analysis and Design of Algorithms </p>
                    <p>3.7 GPA, 5x Dean's List</p>
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*<Button href="http://www.codecrab.me/" size="small">old blog</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

EduInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EduInfoCard);