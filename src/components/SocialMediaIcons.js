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
        right: "1%"
    },
    socialIcon: {
        margin: "auto 0.2rem",
        color: "white",
        fontSize: "30px"
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
                        <IconButton className={classes.socialIcon} onClick={() => window.open("https://www.linkedin.com/in/camille-sanchez-media/")}>
                            < FaLinkedin />
                        </IconButton>
                        
                        <IconButton className={classes.socialIcon} onClick={() => window.open("https://www.instagram.com/cinecamia94_photo_video/")}>
                            <FaInstagram /> 
                        </IconButton>

                        <>
                            <CopyToClipboard text="camille.sanchez94@gmail.com">
                                <Tooltip title="Copy Email to Clipboard">
                                    <IconButton className={classes.socialIcon}> 
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
