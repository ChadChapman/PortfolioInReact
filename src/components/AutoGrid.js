import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function AutoGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper className={classes.paper}>Technologies</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xsmlmlmlmlmlmlmlml
                        mlmlmlmlmlmlmlmlmlmmllmmlmlmlmlmlmlmlmlmlmm</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>Projects</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper className={classes.paper}>Background</Paper>
                    <Paper className={classes.paper}>Professional History</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xsxsxsxsxsxsxsxsxsxsxsxxs</Paper>
                    <Paper className={classes.paper}>Volunteering</Paper>
                    <Paper className={classes.paper}>Code Tacoma</Paper>
                    <Paper className={classes.paper}>Mentoring</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);