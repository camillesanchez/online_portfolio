import React from "react";
import TimelineCard from "../components/TimelineCard";
import { 
    Box,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import { 
    Timeline,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    container: {
        height: "20vh", 
        width: "100vw", 
        zIndex: "1",
        "& .topBottomContainers": {
            height: "15%",
            background: "green"
        },
        "& .centerContainer": {
            "& .timelineContainer": {
                padding: "1rem",
                [theme.breakpoints.up("md")]: {
                    marginLeft: "5rem",
                    marginRight: "5rem",
                },
                "& .timelineItemDot": {
                    background: "#6495ED"
                },
                "& .timelineItemDates": {
                    color: "#A9A9A9", 
                    paddingTop: "0.5rem", 
                    fontSize: "15px",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "13px",
                        paddingTop: "0.7rem"
                    }
                }
            }
        }
    },

}))

// Content

const timelineItems = [
    {
        timelineIcon: <SchoolIcon />,
        timelineName: "Carleton College",
        timelineDescription: "Bachelor of Arts - major: Cinema and Media Studies",
        timelineDate: "2014 - 2017",
        timelineExpand: `Capstone Project: <i> After the Storms </i> (Film in the filmography section of the portfolio)`
    },
    {
        timelineIcon: <WorkIcon />,
        timelineName: "BNP Paribas",
        timelineDescription: "V.I.E (postgraduate intern) as a Multimedia Analyst",
        timelineDate: "2017 - 2018"
    },
    {
        timelineIcon: <SchoolIcon />,
        timelineName: "New York University School of Professional Studies",
        timelineDescription: "Diploma - Introduction to Programming with Python",
        timelineDate: "2018 - 2020",
        timelineExpand: "Note: Fully built this portfolio website using React"
    },
    {
        timelineIcon: <WorkIcon />,
        timelineName: "BNP Paribas",
        timelineDescription: "Multimedia Analyst",
        timelineDate: "2018 - 2020",
        timelineExpand: "Built a fully-functional mini production studio able to manage and produce all external and internal multimedia contents for BNP Paribas CIB USA, from the conception stages to the completion."
    }
];

// Complete Timeline Function
const CompleteTimeline = () => {

    const classes = useStyles()

    return (
        <>     

            <div className={classes.container} >
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
                <Grid container className="centerContainer">
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        
                        <Box className="timelineContainer">
                            <Timeline align="alternate">
                                {timelineItems.map((lsItem, key) => (
                                    <TimelineItem key={key}>
                                        <TimelineOppositeContent>
                                            <Typography className="timelineItemDates">
                                                {lsItem.timelineDate}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator >
                                            <TimelineDot className="timelineItemDot">
                                                {lsItem.timelineIcon}
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <TimelineCard lsItem={lsItem} />
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Box>

                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
            </div>
            {/* <Box className={classes.timelineContainer}>
                <Timeline align="alternate">
                    {timelineItems.map((lsItem, key) => (
                        
                        <TimelineItem key={key}>
                            <TimelineOppositeContent>
                                <Typography className="timelineItemDates">
                                    {lsItem.timelineDate}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                                <TimelineDot className="timelineItemDot">
                                    {lsItem.timelineIcon}
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <TimelineCard lsItem={lsItem} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box> */}
        </>
    )
};

export default CompleteTimeline;