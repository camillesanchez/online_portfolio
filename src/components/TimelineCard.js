import React, { useState } from "react";
import { 
    Box,
    IconButton,
    makeStyles,
    Paper,
    Typography
} from "@material-ui/core";
import parse from "html-react-parser";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

 // CSS Styles
 const useStyles = makeStyles(theme=>({
    paper: {
        padding: "10px 18px",
        background: "white",
        maxWidth: "90%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%"
        },
        "& .timelineItemTitle": {
            color: "#6495ED", 
            fontWeight: "bold", 
            fontSize: "18px",
            [theme.breakpoints.down("sm")]: {
                fontSize: "15px",
            }
        },
        "& .timelineItemDesc": {
            fontSize: "14px",
            paddingTop: "1rem",
            [theme.breakpoints.down("sm")]: {
                fontSize: "13px"
            }
        },
        "& .timelineItemExpand": {
            fontSize: "13px",
            paddingTop: "0.7rem",
        }
    }
}))

// Timeline Card portion
const TimelineCard = (props) => {

    const [showMore,setShowMore] = useState(false)

    const classes = useStyles()
    
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <>
                    <Typography variant="h6" className="timelineItemTitle" >
                        {props.lsItem.timelineName}
                    </Typography>
                    <Typography variant="h7" className="timelineItemDesc" >
                        {props.lsItem.timelineDescription}
                    </Typography>
                    { showMore &&
                        <Typography className="timelineItemExpand">
                            {parse(props.lsItem.timelineExpand)}
                        </Typography>
                    }
                </>
                <>  
                    { props.lsItem.timelineExpand && 
                        <Box>
                            <IconButton size= "small" >
                                { !showMore && 
                                    <ArrowDropDownIcon onClick={() => setShowMore(true)} />
                                }
                                { showMore && 

                                    <ArrowDropUpIcon onClick={() => setShowMore(false)} />
                                }
                            </IconButton>
                        </Box>
                    }
                </>
            </Paper>
        </>
    )
}
export default TimelineCard;