import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './MenuAppBar'
import FooterBar from './FooterBar'
import TechnologyExpansionPanel from './TechnologyExpansionPanel'
import ProjectsPanel from './ProjectsPanel'

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

function AutoGridAppBarHeader(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    {/*<Paper className={classes.paper}>Technologies</Paper>*/}
                    <MenuAppBar/>
                </Grid>
            </Grid>

            {/*<Grid container spacing={24}>*/}
            {/*<Grid item xs={12} sm={4}>*/}
            {/*/!*<Paper className={classes.paper}>Technologies</Paper>*!/*/}
            {/*<TechnologyExpansionPanel />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={4}>*/}
            {/*<Paper className={classes.paper}>Current Projects</Paper>*/}
            {/*<ProjectsPanel />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={4}>*/}
            {/*<Paper className={classes.paper}>Blog</Paper>*/}
            {/*</Grid>*/}
            {/*</Grid>*/}
        </div>

    );
}

AutoGridAppBarHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridAppBarHeader);