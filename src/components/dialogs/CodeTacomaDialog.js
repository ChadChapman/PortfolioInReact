import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CTInfoCard from './infocards/CodeTacomaInfoCard'
import Typography from '@material-ui/core/Typography'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

// function Transition(props) {
//     return <BlogInfoCard />
// }

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paperStyle: {
        //padding: theme.spacing.unit * 2,
        //textAlign: 'center',
        // color: theme.palette.text.secondary,
        //color: theme.palette.text.title,
        //font
        // marginBottom: theme.spacing.unit * 2,
        case: "sentence",

    },
});

class CodeTacomaDialog extends React.Component {
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
                    Code Tacoma
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
                        <CTInfoCard />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="inherit">
                            Go Rainiers!
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

export default CodeTacomaDialog;