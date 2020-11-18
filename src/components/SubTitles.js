import React from "react";
import { 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";

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
                "& .header": {
                    fontFamily: "Hallo Sans",
                    fontSize: "45px",
                    fontWeight: "bold",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "35px",
                    }
                },
            }
        }
    }
}))


// Sub-Titles portion
const SubTitles = (props) => {

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
                            <Typography className="header">
                                {props.title}
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

export default SubTitles;