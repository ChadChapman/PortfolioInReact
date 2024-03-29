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
    listAll: {
        textAlign: 'left'
    }
};

function ToolsCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    Tools
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    development tools I use
                </Typography>
                <Typography className={classes.listAll} component="p">
                    git, Linux, Travis, Docker, Heroku, gunicorn, AWS (Lambda, s3, Logs, API Gateway, IAM, Cognito) Azure Machine Learning Studio, SVN, jUnit, pytest
                </Typography>
            </CardContent>
        </Card>
    );
}

ToolsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolsCard);