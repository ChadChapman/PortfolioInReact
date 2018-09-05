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
        minWidth: 275,
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
                <Typography className={classes.title} color="textSecondary">
                    Whoops, I haven't migrated my blog over to this site yet!
                </Typography>
                <Typography variant="headline" component="h2">
                    in case you are really interested in it for some reason:
                    {bull}
                    warning: the older stuff is  a bit cringy
                    {bull}
                    OK, you were warned...
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
                {/*<Button href="http://www.codecrab.me/" size="small">old blog</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

BlogInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogInfoCard);