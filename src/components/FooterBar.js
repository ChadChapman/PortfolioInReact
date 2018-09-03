import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// const styles = {
//     root: {
//         width: 500,
//     },
// };
const styles = {
    root: {
        flexGrow: 1,
    },
    // flex: {
    //     flexGrow: 1,
    // },
};

class FooterBar extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={6} sm={3}>
                    {/*<Paper className={classes.paper}>Background</Paper>*/}
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    {/*<Paper className={classes.paper}>Professional History</Paper>*/}
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    {/*<Paper className={classes.paper}>Education</Paper>*/}
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    {/*<Paper className={classes.paper}>Mentoring</Paper>*/}
                    <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
                </Grid>
            </Grid>
            </BottomNavigation>
        );
    }
}

FooterBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);