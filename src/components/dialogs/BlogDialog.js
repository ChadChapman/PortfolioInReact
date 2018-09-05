import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import BlogInfoCard from './infocards/BlogInfoCard'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

// function Transition(props) {
//     return <BlogInfoCard />
// }

class BlogDialog extends React.Component {
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
                <Button onClick={this.handleClickOpen}>Blog</Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Where's your blog, Chad?"}
                    </DialogTitle>
                    <DialogContent>
                        {/*<DialogContentText id="alert-dialog-slide-description">*/}
                            {/*<BlogInfoCard />                            */}
                        {/*</DialogContentText>*/}
                        <BlogInfoCard />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            nah, I'm good
                        </Button>
                        <Button href="http://www.codecrab.me/" color="primary">
                            to the old blog!
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default BlogDialog;