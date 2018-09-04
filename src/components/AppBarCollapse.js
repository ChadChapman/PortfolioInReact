const styles = {
    root: {
        flexGrow: 1,
    },
    show: {
        transform: 'translateY(0)',
        transition: 'transform .5s',
    },
    hide: {
        transform: 'translateY(-110%)',
        transition: 'transform .5s',
    },
};

class CollapsibleAppBar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shouldShow: null,
        };

        this.lastScroll = null;

        this.handleScroll = this.handleScroll.bind(this);
        // Alternatively, you can throttle scroll events to avoid
        // updating the state too often. Here using lodash.
        // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(evt) {
        const lastScroll = window.scrollY;

        if (lastScroll === this.lastScroll) {
            return;
        }

        const shouldShow = (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : null;

        if (shouldShow !== this.state.shouldShow) {
            this.setState((prevState, props) => ({
                ...prevState,
                shouldShow,
            }));
        }

        this.lastScroll = lastScroll;
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar
                position="fixed"
                color="default"
                className={
                    `${classes.root} ${
                        this.state.shouldShow === null ? '' : (
                            this.state.shouldShow ? classes.show : classes.hide
                        )
                        }`
                }
            >
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

CollapsibleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsibleAppBar);