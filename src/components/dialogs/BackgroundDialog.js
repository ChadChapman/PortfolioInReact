import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import BackgroundCard from './infocards/BackgroundInfoCard'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class BackgroundDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}
                        fullWidth="true">
                    Personal Background
                </Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    {/*<DialogTitle id="alert-dialog-slide-title">*/}
                    {/*{"Where's your blog, Chad?"}*/}
                    {/*</DialogTitle>*/}
                    <DialogContent>
                        {/*<DialogContentText id="alert-dialog-slide-description">*/}
                        {/*<BlogInfoCard />                            */}
                        {/*</DialogContentText>*/}
                        <BackgroundCard />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="inherit">
                            yay!
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default BackgroundDialog;