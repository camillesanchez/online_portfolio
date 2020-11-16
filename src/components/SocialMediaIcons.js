import React from 'react';
import { 
    Box,
    IconButton,
    makeStyles,
    Toolbar, 
    Tooltip
 } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";

 // CSS Styles
const useStyles = makeStyles(theme=>({
    navbarBox: {
        background: "transparent"
    },
    socialIconsBox:{
        position: "absolute",
        right: "0%",
        "& .socialIcon" : {
            margin: "0 0.2rem",
            color: "white",
            fontSize: "27px",
            [theme.breakpoints.down("md")]: {
                fontSize: "20px"
            },
            [theme.breakpoints.down("xs")]: {
                fontSize: "15px",
                padding: "0.1rem"
            }
        }
    }
}))

// Social Media Icons
const SocialMediaIcons = () => {

    const classes = useStyles()

    return (
        <>
            <Box component= "nav">

                <Toolbar>
                    
                    <Box component="div" className={classes.socialIconsBox}>
                        <IconButton className="socialIcon" onClick={() => window.open("https://www.linkedin.com/in/camille-sanchez-media/")}>
                            < FaLinkedin />
                        </IconButton>
                        
                        <IconButton className="socialIcon" onClick={() => window.open("https://www.instagram.com/cinecamia94_photo_video/")}>
                            <FaInstagram /> 
                        </IconButton>

                        <>
                            <CopyToClipboard text="camille.sanchez94@gmail.com">
                                <Tooltip title="Copy Email to Clipboard">
                                    <IconButton className="socialIcon"> 
                                        <MdEmail /> 
                                    </IconButton>
                                </Tooltip>
                            </CopyToClipboard>
                        </>
                    </Box>
                </Toolbar>

            </Box>
        </>
    )
}

export default SocialMediaIcons ;
