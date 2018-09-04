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

function DBsCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    SQL & NOSQL
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    in descending order of experience
                </Typography>
                <Typography component="p">
                    PostgreSQL, Maria/MySQL, TSQL, Mongo
                </Typography>
            </CardContent>
        </Card>
    );
}

DBsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DBsCard);