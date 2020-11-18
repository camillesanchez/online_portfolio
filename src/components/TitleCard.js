import React from "react";
import { 
    makeStyles,
    Typography,
    Grid
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import QuoteCard from "../components/QuoteCard";

// Media Import
import { After_the_Storms_short } from "../utils/constants";

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    overall: {
        paddingBottom: "2%"
    },
    videoBackground: {
        position: "absolute",
        width: "100%",
        maxHeight: "20%",
        objectFit: "cover",
        zIndex: "-1",
        [theme.breakpoints.up("md")]: {
            maxHeight: "30%"
        }
    },
    videoTextContainer: {
        height: "20vh", 
        width: "100vw", 
        zIndex: "1",
        [theme.breakpoints.up("md")]: {
            height: "30vh"
        },
        "& .topBottomContainers": {
            alignItems: "center",
            height: "15%",
        },
        "& .centerContainer": {
            height: "70%",
            "& .textBox": {
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                "& .textFormatting" : {
                    fontFamily: "Perpetua",
                    fontWeight: "bold",
                    fontSize: "90px",
                    letterSpacing: 16,
                    color: "white",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "60px",
                        letterSpacing: 12
                    },
                    [theme.breakpoints.down("xs")]: {
                        fontSize: "30px",
                        letterSpacing: 12,
                    }  
                }
            }
        }
    }
 }))

 // Content
const quote = [
    {
        itemAuthor: "Annie Leibovitz",
        itemText: "One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."
    }
]

const TitleCard = () => {

    const classes = useStyles()

    return (
        < >
            <Navbar/>

            <div className={classes.overall}>

                {/* Video */}
                <div >
                    <video autoPlay loop muted className={classes.videoBackground} >
                        <source src={After_the_Storms_short} type="video/mp4" />
                    </video>
                </div>

                {/* Text over video */}
                <div className={classes.videoTextContainer}>
                    <Grid container className="topBottomContainers" >
                        <Grid item xs={12} />
                    </Grid>
                    <Grid container align="center" className="centerContainer">
                            <Grid item xs />
                            <Grid item xs={10} className="textBox">
                                <Typography variant="h3" className="textFormatting" >
                                    Portfolio
                                </Typography>
                            </Grid>
                            <Grid item xs />
                    </Grid>
                    <Grid container className="topBottomContainers" >
                        <Grid item xs={12} />
                    </Grid>
                </div>

                <>
                    {/* Quote Card */}
                    {quote.map((lsItem, key) => (
                        <QuoteCard key={key} lsItem={lsItem} />
                    ))}
                </>

            </div>
        </>

    )
};

export default TitleCard;