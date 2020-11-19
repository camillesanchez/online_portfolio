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
        height: "30%", 
        width: "100vw", 
        zIndex: "1",
        padding: "2% 0",
        // background: "yellow",
        "& .textBox" : {
            position: "flex",
            [theme.breakpoints.up("md")]: {
                padding: "0 10%"
            },

            "& .quoteText": {
                fontSize: "16.5px",
                textAlign: "center",
                margin: "0 1rem",
                [theme.breakpoints.down("md")]: {
                    fontSize: "14px",
                },
                [theme.breakpoints.down("xs")]: {
                    fontSize: "11px",
                },
            },
            "& .authorText": {
                fontSize: "15px",
                textAlign: "right",
                fontWeight: "bold",
                marginRight: "10%",
                [theme.breakpoints.down("md")]: {
                    fontSize: "12px",
                },
                [theme.breakpoints.down("sm")]: {
                    fontSize: "11px",
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
}))


// QuoteCard section
const QuoteCard = (props) => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.quoteContainer} >
                <Grid container >
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
            </div>
        </>
    )
};

export default QuoteCard;