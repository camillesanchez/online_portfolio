import React from "react";
import { 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";
import parse from "html-react-parser";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    textContainer: {
        height: "20vh", 
        width: "100vw", 
        zIndex: "1",
        "& .topBottomContainers": {
            height: "15%",
            background: "yellow"
        },
        "& .centerContainer": {
            "& .textBox" : {
                position: "flex",
                [theme.breakpoints.up("md")]: {
                    padding: "0 5%"
                },
                "& .introText": {
                    fontSize: "16.5px",
                    textAlign: "left",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "11px",
                    },
                }
            }
        }
    }
}));

// IntroParagraph portion
const IntroParagraph = (props) => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.textContainer} >
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
                <Grid container className="centerContainer">
                        <Grid item xs={2} />
                        <Grid item xs={8} className="textBox">
                            <Typography className="introText">
                                {parse(props.introString)}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                </Grid>
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
            </div>
            
        </>

    )
};

export default IntroParagraph;