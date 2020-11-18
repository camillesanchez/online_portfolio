import React, { useState } from "react";
import { 
    Grid,
    IconButton,
    makeStyles,
    Tooltip,
    Typography
} from "@material-ui/core";
import { BsChevronDoubleDown } from "react-icons/bs";
import PhotoCard from "./PhotoCard";

// Media Imports:
import { 
    argentina,
    carleton_sunset,
    death_valley
} from "../utils/constants";

const useStyles = makeStyles((theme) => ({
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
        photoTitle: "Reflection of Buenos Aires' Business Center",
        photoDesc: "Buenos Aires, Argentina"
    },
    {
        photoCover: death_valley,
        photoAlt: "Photo taken in the Death Valley (CA, USA)",
        photoTitle: "Beautiful Sight on a Climb",
        photoDesc: "Death Valley, California, USA"
    },
    {
        photoCover: carleton_sunset,
        photoAlt: "Carleton College sunset",
        photoTitle: "Sunset Walk on Campus",
        photoDesc: "Carleton College, Northfield, Minessota, USA"
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