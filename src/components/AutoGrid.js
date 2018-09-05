import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FooterBar from './FooterBar'
import TechnologyExpansionPanel from './TechnologyExpansionPanel'
import ProjectsPanel from './ProjectsPanel'
import BufferBar from './BufferBar'
import BlogDialog from './dialogs/BlogDialog'
import EducationDialog from './dialogs/EducationDialog'
import BackgroundDialog from './dialogs/BackgroundDialog'
import HistoryDialog from './dialogs/HistoryDialog'
import CTDialog from './dialogs/CodeTacomaDialog'

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,

        flexGrow: 1,
    },
    paper: {

        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: theme.palette.text.title,
        // marginBottom: theme.spacing.unit * 2,
    },
});

function AutoGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <BufferBar />
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Technologies</Paper>*/}
                    {/*<TechnologyExpansionPanel />*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/*<Paper className={classes.paper}>Current Projects</Paper>*/}
                    {/*<ProjectsPanel />*/}
                    <Paper className={classes.paper}>Technologies</Paper>
                    <TechnologyExpansionPanel />
                </Grid>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Blog</Paper>*/}
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Technologies</Paper>*/}
                    {/*<TechnologyExpansionPanel />*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Current Projects</Paper>
                    <ProjectsPanel />
                </Grid>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Blog</Paper>*/}
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Technologies</Paper>*/}
                    {/*<TechnologyExpansionPanel />*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/*<Paper className={classes.paper}>Current Projects</Paper>*/}
                    {/*<ProjectsPanel />*/}
                    {/*<Paper className={classes.paper}>Blog</Paper>*/}
                    <Paper className={classes.paper}>
                        <BlogDialog />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    {/*<Paper className={classes.paper}>Blog</Paper>*/}
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={6} sm={4}>
                    {/*<Paper className={classes.paper}>Personal Background</Paper>*/}
                    <Paper className={classes.paper}>
                        <BackgroundDialog />
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    {/*<Paper className={classes.paper}>Professional History</Paper>*/}
                    <Paper className={classes.paper}>
                        <HistoryDialog />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/*<Paper className={classes.paper}>Education</Paper>*/}
                    <Paper className={classes.paper}>
                        <EducationDialog />
                    </Paper>
                </Grid>
                {/*<Grid item xs={6} sm={3}>*/}
                    {/*<Paper className={classes.paper}>Mentoring</Paper>*/}
                {/*</Grid>*/}
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    {/*<Paper className={classes.paper}>Code Tacoma</Paper>*/}
                    <Paper className={classes.paper}>
                        <CTDialog />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Interests & Achievements</Paper>
                </Grid>
            </Grid>
            <FooterBar />
        </div>

    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);