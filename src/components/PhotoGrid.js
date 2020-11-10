import React, { useState } from "react";
import { 
    CardMedia,
    Container,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Tooltip,
    Typography
} from "@material-ui/core";
import { BsChevronDoubleDown } from "react-icons/bs";
import PhotoCard from "./PhotoCard";

import argentina from "../files/argentina.JPG";


const useStyles = makeStyles((theme) => ({
    textContainer: {
        padding: "2rem 8rem 1.5rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 4rem 1rem"
        }
    },
    button: {
        position: "relative"
    },
    textMoreButton: {
        position: "relative",
        fontSize: "17px",
        fontWeight: "bold",
        paddingTop: "0.8rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "11.5px",
            paddingTop: "0.8rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "20px",
            paddingTop: "0.8rem"
        }
    },
    moreButton: {
        position: "relative",
        fontSize: "25px",
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: "20px"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "30px"
        }
    }
  }));

// Content

const photoItems = [
    {
        photoCover: argentina,
        photoAlt: "Photo of Buenos Aires view over water.",
        photoTitle: "Photoscape",
        photoDesc: "Buenos Aires, Argentina"
    },
    {
        photoCover: argentina,
        photoAlt: "BNP Paribas Protection of the Oceans Video photo cover",
        photoTitle: "",
        photoDesc: ""
    },
    {
        photoCover: argentina,
        photoAlt: "BNP Paribas Protection of the Oceans Video photo cover",
        photoTitle: "",
        photoDesc: ""
    }
]

const photoItemsShown = (counter) => {
    
    const photoData = [] 

    if (counter > photoItems.length) {
        counter = photoItems.length
    }

    for (let i=0; i<counter; i++) {
        photoData.push(photoItems[i])
    } 
    return photoData
}

const PhotoGrid = () => {

    const [gridNumber, setGridNumber] = useState(2)

    const classes = useStyles()

    return (
        <>
            <Container className={classes.textContainer}>
                <Grid container >
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {photoItemsShown(gridNumber).map((lsItems, key) => (
                                <Grid key={key} item>
                                    <PhotoCard lsItems={lsItems} />  
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            { gridNumber < photoItems.length &&
                    <div className={classes.button}>
                        <Grid container justify="center" >
                            <Tooltip title="Once Clicked, Scroll Up for Added Videos">
                                <IconButton>
                                    <BsChevronDoubleDown className={classes.moreButton} onClick={() => setGridNumber(gridNumber+2)} />
                                </IconButton>
                            </Tooltip>
                            <Typography className={classes.textMoreButton}>
                                More Photos...
                            </Typography>
                        </Grid>
                    </div>
                }
        </>
    )
};

export default PhotoGrid;