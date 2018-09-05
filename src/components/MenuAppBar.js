import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip'
//import amberColor from '@material-ui/colors/amber'

const styles = theme => ({
    root: {
        positionSticky: true,
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    leftIconButton: {
        // marginLeft: -12,
        marginLeft: theme.spacing.unit * -2,
        //marginRight: 20,
        marginRight: theme.spacing.unit * 2,
        // marginTop: theme.spacing.unit * -1.5,
        color: "cyan",
    },
    rightIconButton: {
        // marginLeft: 12,
        marginLeft: theme.spacing.unit * 2,
        // marginRight: -20,
        marginRight: theme.spacing.unit * -2,
        // marginTop: theme.spacing.unit * -1.5,
        color: "cyan",
    },
});

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => { //not currently used
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => { //not currently used
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <Tooltip title="let's connect!">
                        <IconButton className={classes.leftIconButton}
                                    href="https://www.linkedin.com/in/chadtchapman/"
                                    aria-label="My LinkedIn Profile">
                            <i className="zmdi zmdi-linkedin"></i>
                        </IconButton>
                        </Tooltip>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Chad T. Chapman's Personal Page
                        </Typography>
                        <Tooltip title="my Github">
                            <IconButton className={classes.rightIconButton}
                                        href="https://github.com/ChadChapman"
                                        aria-label="My Github profile">
                                <i className="zmdi zmdi-github-alt"></i>
                            </IconButton>
                        </Tooltip>
                        {auth && (
                            <div>
                                {/*<Tooltip title="blog">*/}
                                {/*<IconButton*/}
                                    {/*aria-owns={open ? 'menu-appbar' : null}*/}
                                    {/*aria-haspopup="true"*/}
                                    {/*onClick={this.handleMenu}*/}
                                    {/*color="inherit"*/}
                                {/*>*/}
                                    {/*<CreateIcon />*/}
                                {/*</IconButton>*/}
                                {/*</Tooltip>*/}

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);