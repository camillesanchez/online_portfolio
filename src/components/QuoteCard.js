import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { 
    Container,
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    quoteContainer: {
        height: "20vh", 
        width: "100vw", 
        zIndex: "1",
        "& .topBottomContainers": {
            height: "15%",
            background: "green"
        },
        "& .centerContainer": {
            "& .textBox" : {
                position: "flex",
                [theme.breakpoints.up("md")]: {
                    padding: "0 10%"
                },

                "& .quoteText": {
                    fontSize: "16.5px",
                    textAlign: "center",
                    margin: "0 1rem",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "11px",
                    },
                },
                "& .authorText": {
                    fontSize: "15px",
                    textAlign: "right",
                    fontWeight: "bold",
                    marginRight: "10%",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "10px",
                    }
                },
                "& .leftIcon": {
                    textAlign: "left", 
                    fontSize: "20px",
                    padding: "0",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "15px",
                    }
                },
                "& .rightIcon": {
                    textAlign: "right",
                    fontSize: "20px",
                    padding: "0",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "15px",
                    }
                }
            }
        }
    }
}))


// QuoteCard section
const QuoteCard = (props) => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.quoteContainer} >
                <Grid container className="topBottomContainers" >
                    <Grid item xs={12} />
                </Grid>
                <Grid container className="centerContainer">
                        <Grid item xs={2} />
                        <Grid item xs={8} className="textBox">
                            <Container className="leftIcon" >
                                <ImQuotesLeft />
                            </Container>
                            <Typography className="quoteText">
                                {props.lsItem.itemText}
                            </Typography>
                            <Container className="rightIcon">
                                <ImQuotesRight  />
                            </Container>
                            <Typography className="authorText">
                                -- {props.lsItem.itemAuthor} --
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

export default QuoteCard;