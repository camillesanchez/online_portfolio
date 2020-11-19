import React from "react";
import CompleteTimeline from "../components/CompleteTimeline";
import IntroParagraph from "../components/IntroParagraph";
import SubTitles from "../components/SubTitles";
import { 
    IconButton,
    makeStyles,
    Tooltip,
    Typography,
    Grid
} from "@material-ui/core";
import { GrDocumentPdf } from "react-icons/gr";

// Media imports
import { 
    resumeShortEN,
    resumeLongEN,
    resumeLongFR
} from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    downloadContainer: {
        // display: "inline-block",
        height: "20%", 
        padding: "2% 0 0%",
        // background: "pink",
        width: "100vw", 
        zIndex: "1",
        "& .textBox" : {
            position: "flex",
            [theme.breakpoints.up("md")]: {
                padding: "0 5%"
            },
            "& .downloadText": {
                textAlign: "left",
                fontSize: "13px",
                [theme.breakpoints.down("sm")]: {
                    fontSize: "11px",
                }
            }
        }
    }
}))

// Content

const pdfDownloads = [
    {
        pdfTitle: "Download Abreviated Resume in English",
        pdfReference: resumeShortEN
    },
    {
        pdfTitle: "Download Full Resume in English",
        pdfReference: resumeLongEN
    },
    {
        pdfTitle: "Download Full Resume in French",
        pdfReference: resumeLongFR
    }
];

const introString = "Paris-based producer, filmmaker and photographer, passionated by cinema and aspiring to one-day work in the industry! <br/> <br/> I am driven and a hard-worker, with lots of enthusiasm and creativity, I proud myself to always aspire to be better and to challenge myself in attempting tasks I have never done before.";

const title = "Background";
const download = "Download Resume (in different languages and/or length):";

// About Page - Background section
const AboutBackground = () => {

    const classes = useStyles()

    return (
        <>
            {/* Title & Intro Text */}
            <SubTitles title={title} />
            <IntroParagraph introString={introString} />
                
            {/* Timeline Portion */}
            <CompleteTimeline />

            {/* Download PDFs */}
            <div className={classes.downloadContainer} >
                <Grid container >
                        <Grid item xs={2} />
                        <Grid item xs={8} className="textBox">
                            <Typography className="downloadText">
                                {download}
                            </Typography>
                            {pdfDownloads.map((lsItem, key) => (
                                <Tooltip key={key} title={lsItem.pdfTitle}> 
                                    <a href={lsItem.pdfReference} target="_blank">
                                        <IconButton> 
                                            <GrDocumentPdf/> 
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            ))}
                        </Grid>
                        <Grid item xs={2} />
                </Grid>
            </div>
        </>
    )
};

export default AboutBackground;