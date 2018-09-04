import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import ProjectStepper from '../../recyclebin/ProjectStepper'
import FishnGigsCard from './projects/FishnGigsCard'
import TacomaAPICard from './projects/TacomaAPICard'

const styles = theme => ({
    root: {
        //width: '100%',
        flexGrow: 1,
    },
    heading: {
        //  textJustify: theme.typography.title,
        // fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

function ProjectsPanel(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            {/*<Typography className={classes.heading}>Current Projects</Typography>*/}
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <FishnGigsCard />
                </Grid>
                <Grid item xs={12}>
                    <TacomaAPICard />
                </Grid>
            </Grid>
        </div>
    );
}

ProjectsPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsPanel);