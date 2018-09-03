import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
//import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import GroupIcon from '@material-ui/icons/GroupRounded'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/HomeRounded'
import BookIcon from '@material-ui/icons/BookRounded'
import Paper from '@material-ui/core/Paper';

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
                <Grid item xs={4} sm={4}>
                    {/*<Paper className={classes.paper}>Background</Paper>*/}
                    <Tooltip title="collaborations">
                    <BottomNavigationAction label="Recents" value="recents" icon={<GroupIcon />} />
                    </Tooltip>
                </Grid>
                <Grid item xs={4} sm={4}>
                    {/*<Paper className={classes.paper}>Mentoring</Paper>*/}
                    <Tooltip title="favorite books">
                    <BottomNavigationAction label="Folder" value="folder" icon={<BookIcon />} />
                    </Tooltip>
                </Grid>
                <Grid item xs={4} sm={4}>
                    {/*<Paper className={classes.paper}>Professional History</Paper>*/}
                    <Tooltip title="location">
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<LocationOnIcon />} />
                    </Tooltip>
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