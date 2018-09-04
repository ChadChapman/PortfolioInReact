import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import WorkIcon from '@material-ui/icons/WorkRounded'
import CodeIcon from '@material-ui/icons/CodeRounded'
import CreateIcon from '@material-ui/icons/CreateRounded'
import GroupIcon from '@material-ui/icons/GroupRounded'
import Tooltip from '@material-ui/core/Tooltip'
import HomeIcon from '@material-ui/icons/HomeRounded'



const styles = {
    root: {
        //maxHeight: "100px",
        positionSticky: true,
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    stickyNode: {



    }
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
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
                {/* fixed, absolute, sticky static    */}
                {/*<AppBar position="static">*/}
                    <Toolbar>
                        {/*<Tooltip title="list of all sections">*/}
                        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
                            {/*<MenuIcon />*/}
                        {/*</IconButton>*/}
                        {/*</Tooltip>*/}
                        {/*<Tooltip title="back to home">*/}
                            {/*<IconButton*/}
                                {/*aria-owns={open ? 'menu-appbar' : null}*/}
                                {/*aria-haspopup="true"*/}
                                {/*// onClick={this.handleMenu}*/}
                                {/*color="inherit"*/}
                            {/*>*/}
                                {/*<HomeIcon />*/}
                            {/*</IconButton>*/}
                        {/*</Tooltip>*/}
                        {/*<Tooltip title="back to home page">*/}
                        {/*<IconButton className={classes.flex} color="inherit" aria-label="Back to Home">*/}
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Chad T. Chapman's Personal Page
                        </Typography>
                        {/*</IconButton>*/}
                        {/*</Tooltip>*/}
                        {auth && (
                            <div>
                                <Tooltip title="blog">
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <CreateIcon />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="work history">
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <WorkIcon />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="code samples">
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <CodeIcon />
                                </IconButton>
                                </Tooltip>
                                {/*<Tooltip title="collaborations">*/}
                                {/*<IconButton*/}
                                    {/*aria-owns={open ? 'menu-appbar' : null}*/}
                                    {/*aria-haspopup="true"*/}
                                    {/*onClick={this.handleMenu}*/}
                                    {/*color="inherit"*/}
                                {/*>*/}
                                    {/*<GroupIcon />*/}
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