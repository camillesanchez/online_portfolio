import React from "react";
import SubTitles from "../components/SubTitles";
import { 
    CardMedia, 
    Grid,
    makeStyles
} from "@material-ui/core";

// Media imports
import { 
    multimediaskills,
    programingskills,
    languagesskills,
    equipmentskills,
} from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    skillsContainer: {
        height: "20%", 
        width: "100vw", 
        zIndex: "1",
        display: "inline-block",
        padding: "2% 0 0%",
        // background: "purple",
        "& .textBox" : {
            position: "flex",
            [theme.breakpoints.up("md")]: {
                padding: "0 5%"
            },
            "& .imageCover": {
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
        }
    }
}))

// Content
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
];

const title = "Very good at...";

// About Page - Good At section Function
const AboutGoodAt = () => {

    const classes = useStyles()

    return (
        <>

            {/* Title & Intro Text */}
            <SubTitles title={title} />

            {/* Skills images */}
            <div className={classes.skillsContainer} >
                <Grid container >
                        <Grid item xs />
                        <Grid item xs={10} className="textBox">
                            <Grid container >
                                <Grid item xs={12}>
                                    <Grid container justify="center" spacing={1}>
                                        {skillsItems.map((lsItems, key) => (
                                            <Grid key={key} item>
                                                <CardMedia
                                                    component="img"
                                                    image= {lsItems.skillPhoto}
                                                    className="imageCover"
                                                    alt= {lsItems.skillsAlt}
                                                    >
                                                </CardMedia>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs />
                </Grid>
            </div>

        </>
    )
};

export default AboutGoodAt;