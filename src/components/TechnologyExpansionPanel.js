import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import LanguagesCard from './TechCardLanguages';
import DBsCard from './TechCardDBs'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesRounded'
import LaptopIcon from '@material-ui/icons/LaptopRounded'
import ToolsCard from './TechCardTools'
import FrameworksCard from './TechCardFrameworks'


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        // fontSize: theme.typography.pxToRem(15),
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

function TechnologyExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <LaptopIcon className={classes.heading}/>
                    <Typography className={classes.secondaryHeading}>Technologies</Typography>
                    {/*<Typography className={classes.heading}>Technologies</Typography>*/}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <LanguagesCard />
                    </Grid>
                    <Grid item xs={12}>
                        <DBsCard />
                    </Grid>
                    <Grid item xs={12}>
                        <ToolsCard />
                    </Grid>
                    <Grid item xs={12}>
                        <FrameworksCard />
                    </Grid>
                </Grid>
                </ExpansionPanelDetails>
                    {/*<Paper className={classes.paper}>SQL & NOSQL (similar ordering as above):</Paper>*/}
                    {/*<Typography>*/}
                        {/*PostgreSQL, Maria/MySQL, TSQL, Mongo*/}
                    {/*</Typography>*/}
                    {/*<Paper className={classes.paper}>SQL & NOSQL (similar ordering as above):</Paper>*/}
                    {/*<Typography>*/}
                        {/*PostgreSQL, Maria/MySQL, TSQL, Mongo*/}
                    {/*</Typography>*/}

            </ExpansionPanel>
        </div>
    );
}

TechnologyExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TechnologyExpansionPanel);