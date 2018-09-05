import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import INAInfoCard from './infocards/INAInfoCard'
import Typography from '@material-ui/core/Typography'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class INADialog extends React.Component {
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
                    Interests & Achievements
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
                        <INAInfoCard />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            got it
                        </Button>
                        {/*<Button href="http://www.codecrab.me/" color="primary">*/}
                            {/*to the old blog!*/}
                        {/*</Button>*/}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default INADialog;