import React from "react";
import TimelineCard from "../components/TimelineCard";
import { 
    Box,
    Card,
    CardMedia, 
    Container,
    Grid,
    IconButton,
    makeStyles,
    Tooltip,
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
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { GrDocumentPdf } from "react-icons/gr";

// Media imports
import { 
    camillefilming,
    multimediaskills,
    programingskills,
    languagesskills,
    equipmentskills,
    resumeShortEN,
    resumeLongEN,
    resumeLongFR
} from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    imageStyling: {
        position: "absolute",
        height: "50%",
        [theme.breakpoints.down("sm")]: {
            height: "40%"
        }
    },
    textOverlay: {
        position: "relative",
        fontFamily: "Bambi",
        fontWeight: "bold",
        fontSize: "90px",
        textAlign: "center",
        margin: "9rem 5rem",
        color: "white",
        [theme.breakpoints.down("md")]: {
            fontSize: "80px",
            margin: "9rem 5rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "60px",
            margin: "8rem 5rem"
        }
    },
    textContainer: {
        padding: "2rem 8rem 4rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 4rem 1.7rem"
        }
    },
    headers: {
        fontFamily: "Hallo Sans",
        fontSize: "45px",
        fontWeight: "bold",
        marginTop: "1rem",
        marginBottom: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px",
        }
    },
    text: {
        fontSize: "16.5px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    timelineContainer: {
        padding: "1rem",
        [theme.breakpoints.up("md")]: {
            marginLeft: "5rem",
            marginRight: "5rem",
        }
    },
    paper: {
        padding: "6px 14px",
        background: "white",
        maxWidth: "90%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%"
        }
    },
    timelineItemTitle: {
        color: "#6495ED", 
        fontWeight: "bold", 
        padding: "0.3rem",
        fontSize: "18px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    timelineItemDesc: {
        padding: "0.3rem",
        background: "red",
        fontSize: "14px",
        lineHeight: "1.3",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px"
        }
    },
    timelineItemDates: {
        color: "#A9A9A9", 
        paddingTop: "0.5rem", 
        fontSize: "15px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            paddingTop: "0.7rem"
        }
    },
    quoteContainer: {
        position: "flex",
        justifyContent: "center",  
        padding: "1rem",      
        [theme.breakpoints.up("lg")]: {
            padding: "1rem 11rem"
        }

    },
    introText: {
        marginTop: "27rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "22rem"
        }
    },
    authorText: {
        fontSize: "15px",
        textAlign: "right",
        fontWeight: "bold",
        marginLeft: "1rem",
        marginRight: "10%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        }
    },
    quoteText: {
        fontSize: "16.5px",
        marginLeft: "1rem",
        marginRight: "1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        }
    },
    rightQuote: {
        marginLeft: "95%", 
        fontSize: "20px",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "89%"
        }
        
    },
    skillsContainer: {
        maxWidth: "40%",
        maxHeight: "40%"
    },
    imageCover: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "460px",
        padding: "0rem 2rem",
        [theme.breakpoints.down("md")]: {
            maxWidth: "350px"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "270px"
        }
    }
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
]

const skillsItems = [
    {
        skillPhoto: multimediaskills,
        skillsAlt: "Video, Photo, Animation and illustration software I know"
    },
    {
        skillPhoto: equipmentskills,
        skillsAlt: "Photo with the Programing Languages known"
    },
    {
        skillPhoto: programingskills,
        skillsAlt: "Photos with the languages I speak"
    },
    {
        skillPhoto: languagesskills,
        skillsAlt: "Photos with the languages I speak"
    }
]

const quote = [
    {
        itemAuthor: "Diane Arbus",
        itemText: "Taking pictures is like tiptoeing into the kitchen late at night and stealing Oreo cookies."
    }
]

// About Page Function
const About = () => {

    const classes = useStyles()

    return (
        <>
            {/* Title Card */}
            <Card>
                <CardMedia
                    component="img"
                    image= {camillefilming}
                    className={classes.imageStyling}
                    alt="Photo of Camille Sanchez filming a tennis match at the BNP Paribas Open tennis tournament.">
                    
                </CardMedia>
                <Typography variant="h3" className={classes.textOverlay} >
                    ABOUT ME
                </Typography>
            </Card>

            {/* Text */}
            <Box className={classes.textContainer}>
                <Typography variant="h6" className={classes.headers} >
                    Background
                </Typography>
                <Typography variant="h7" className={classes.text} >
                    Paris-based producer, filmmaker and photographer, passionated by cinema and aspiring to one-day work in the industry!
                    <br/> <br/> I am driven and a hard-worker, with lots of enthusiasm and creativity, I proud myself to always aspire to be better and to challenge myself in attempting tasks I have never done before.
                </Typography>
                
                {/* Timeline Portion */}
                <Box className={classes.timelineContainer}>
                    <Timeline align="alternate">
                        {timelineItems.map((lsItem, key) => (
                            
                            <TimelineItem key={key}>
                                <TimelineOppositeContent>
                                    <Typography className={classes.timelineItemDates}>
                                        {lsItem.timelineDate}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator >
                                    <TimelineDot style={{ background: "#6495ED" }}>
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
                
                {/* Download PDFs */}
                <Typography variant="h6" className={classes.text} style={{fontSize: "13px"}}>
                    Download Resume (in different languages and/or length):
                </Typography>
                <Tooltip title="Download Abreviated Resume in English"> 
                    <a href={resumeShortEN} target="_blank">
                        <IconButton> 
                            <GrDocumentPdf/> 
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip title="Download Full Resume in English"> 
                    <a href={resumeLongEN} target="_blank">
                        <IconButton> 
                            <GrDocumentPdf/> 
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip title="Download Full Resume in French"> 
                    <a href={resumeLongFR} target="_blank">
                        <IconButton> 
                            <GrDocumentPdf/> 
                        </IconButton>
                    </a>
                </Tooltip>

                <Typography variant="h6" className={classes.headers} >
                    Very good at...
                </Typography>

                {/* Skills images */}
                <div>
                    <Grid container >
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={1}>
                                {skillsItems.map((lsItems, key) => (
                                    <Grid key={key} item>
                                        <CardMedia
                                            component="img"
                                            image= {lsItems.skillPhoto}
                                            className={classes.imageCover}
                                            alt= {lsItems.skillsAlt}
                                            >
                                        </CardMedia>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                {/* Quote Portion*/}
                <Container className={classes.quoteContainer} >
                    <ImQuotesLeft style={{textAlign: "right", fontSize: "20px"}} />
                    {quote.map((lsItem, key) => (
                        <Box key={key} >
                            <Typography className={classes.quoteText}>
                                {lsItem.itemText}
                            </Typography>
                            <ImQuotesRight className={classes.rightQuote}/>
                            <Typography className={classes.authorText}>
                                -- {lsItem.itemAuthor} --
                            </Typography>
                        
                        </Box>
                    ))}
                </Container>
            </Box >
        </>
    )
};

export default About;