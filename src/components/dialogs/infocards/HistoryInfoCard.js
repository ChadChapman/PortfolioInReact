import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        //minWidth: 275,
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    sectionTitle: {
        variant: "headline"
    }
};

function HistoryInfoCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                {/*<Typography className={classes.title} color="textSecondary">*/}
                {/*Whoops, I haven't migrated my blog over to this site yet!*/}
                {/*</Typography>*/}
                {/*<Typography variant="headline" component="h2">*/}
                <Typography className={classes.title} color="textSecondary" paragraph>
                    <h3>Freelance Software Development</h3>
                    <p>Solving problems by writing code, for money.</p>
                    <p>In this role I deliver value to clients through writing software.
                    I derive satisfaction from solving problems and this allows me to solve
                        problems and concurrently gain professional experience.</p>
                    <p>Skills: Python, JavaScript (React & ES6 so far), Java, Bash, SQL,
                        marketing, client communications, collaboration, time management, budgeting,
                        HTML & CSS, time estimates (not great at this yet, tbh), root problem analysis,
                        requirements gathering, brand management.</p>
                </Typography>
                <Typography className={classes.title} color="textSecondary" paragraph>
                    <h3>Algorithms Seminar Facilitator, University of Washington</h3>
                    <p>Seminar Facilitators are analagous to TAs and Seminars are optional,
                        supplemental courses designed to improve learning outcomes for
                        core Computer Science material.</p>
                    <p>In this role I "facilitated" a deeper comprehension of concepts
                        from TCSS, Design and Analysis of Algorithms.  Collaborative group work
                    , whiteboarding and independent research were all tools I leveraged
                    to aid my section of fellow students.</p>
                    <p>Skills: Java, leadership, public speaking, collaboration,
                        time management, organization, asymptotic complexity analysis,
                    space vs. time trade-off analysis.</p>
                </Typography>
                <Typography className={classes.title} color="textSecondary" paragraph>
                    <h3>Lead Data Processor</h3>
                    <p>Print's not dead yet!  Putting words on things is still a huge business
                    and before those words are printed, their container files often need to be
                    munged, parsed, verified and processed on the correct printing platform.</p>
                    <p>Invoices, marketing materials and client access to the corresponding
                        digital records all fell under my responsibility.  Part copy editor, part QA,
                    part Junior Developer, part Account Manager, this role was never dull and
                    provided me with ample room to grow.</p>
                    <p>Skills: MS Access, SQL, VBA, cross department collaboration, time management, process
                        organization, client relations, proofreading, BulkMailer, Fox Pro,
                        HIPPA compliance, GLBA compliance, training, mentorship.</p>
                </Typography>
                <Typography className={classes.title} color="textSecondary" paragraph>
                    <h3>Commercial Fisherman</h3>
                    <p>In the Physics sense, the ocean is one huge (and very non-static) system.  Plying a
                    successful living out of such an environment requires creativity and perseverance.</p>
                    <p>Mechanical, electrical, hydraulic systems all break, so learning how they work is
                    crucial to generating income.  Commercial fisherman are nearly all self-employed, so if
                    the boat is not out fishing, no income is being generated for the owner or crew.  This is
                    of course on top of the human element of hiring coordinating with other crew members and
                    other vessels.  Your reputation is your resume and your communication skills are just as
                    important as your grit when it comes to navigating a successful fishing career.</p>
                    <p>Skills: algorithmic problem solving, collaboration, geo-spatial data comprehension,
                        time management, process improvement, mentorship, training, metal fabrication, gear & materials research,
                        regulations compliance, resource management, safety assurance & conditions monitoring.</p>
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*<Button href="http://www.codecrab.me/" size="small">old blog</Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}

HistoryInfoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HistoryInfoCard);