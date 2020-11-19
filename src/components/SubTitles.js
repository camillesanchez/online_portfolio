import React from "react";
import { 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    textContainer: {
        height: "10%", 
        width: "100vw", 
        zIndex: "1",
        padding: "2% 0 0%",
        // background: "blue",
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
}))


// Sub-Titles portion
const SubTitles = (props) => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.textContainer} >
                <Grid container >
                        <Grid item xs={2} />
                        <Grid item xs={8} className="textBox">
                            <Typography className="header">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                </Grid>
            </div>
            
        </>

    )
};

export default SubTitles;