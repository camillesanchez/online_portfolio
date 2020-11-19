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
        height: "20%", 
        width: "100vw", 
        zIndex: "1",
        padding: "2% 0",
        // background: "red",
        "& .textBox" : {
            position: "flex",
            [theme.breakpoints.up("md")]: {
                padding: "0 5%"
            },
            "& .introText": {
                fontSize: "16.5px",
                textAlign: "left",
                [theme.breakpoints.down("md")]: {
                    fontSize: "14px",
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: "11px",
                },
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
                <Grid container >
                        <Grid item xs={2} />
                        <Grid item xs={8} className="textBox">
                            <Typography className="introText">
                                {parse(props.introString)}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                </Grid>
            </div>
            
        </>

    )
};

export default IntroParagraph;