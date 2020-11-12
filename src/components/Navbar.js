import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import { 
    AppBar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar, 
    Typography,
    Tooltip
} from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiMenu } from "react-icons/hi";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { MdEmail, MdPhotoCamera } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GiFilmProjector } from "react-icons/gi";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";


 // CSS Styles
const useStyles = makeStyles(theme=>({
    navbarBox: {
        background: "black"
    },
    navbarText: {
        fontFamily: "Georgia"
    },
    menuSliderContainer: {
        width: "250px",
        height: "100%",
        background: "black",
        position: "flex",
    },
    menuTitle: {
        color: "white",
        textAlign: "center",
        padding: "1rem",
        paddingTop: "2rem",
        "& .top": {
            fontSize: "23px",
        },
        "& .bottom": {
            fontSize: "18px",
        }
    },
    menuContainer: {
        padding: "1rem",
        top:"3rem",
        left: "1rem",
        right: "1rem",
        height: "100%",
        "& .menuTitle": {
            color: "white",
            textAlign: "center",
            padding: "1rem",
            paddingTop: "2rem",
            "& .top": {
                fontSize: "20px",
                fontWeight: "bold"
            },
            "& .bottom": {
                fontSize: "18px",
                paddingBottom: "1rem"
            }
        },
        "& .menuText" : {
            color: "white",
            fontSize: "18px",
            textDecoration: "none" 
        },
        "& .menuIcon" : {
            color: "white",
            fontSize: "22px",
            padding: "0"
        },
        "& .email": {
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            paddingTop: "0.5rem"
        },
        "& .line": {
            color: "white",
            backgroundColor: "white", 
            height: "5", 
            width: "30%", 
            justifyContent: "center",
            marginTop: "28.5rem"
        }
    },
    menuIcon: {
        color: "white",
        fontSize: "22px",
        padding: "0"
    },
    socialIconsBox:{
        position: "absolute",
        right: "1%",
        "& .socialIcon": {
            margin: "auto 0.2rem",
            color: "white",
            fontSize: "22px"
        }
    },
    pageWrap: {
        textAlign: "center",
        overflow: "auto",
        top: "45%",
        position: "relative"
    }
}))

// Content
const menuItems = [
    {
        pageName: "Home",
        pageLink: "/",
        pageIcon: <FaHome/>
    },
    {
        pageName: "Filmography",
        pageLink: "/overall#filmography",
        pageIcon: <GiFilmProjector/>
    },
    {
        pageName: "Photography",
        pageLink: "/overall#photography",
        pageIcon: <MdPhotoCamera/>
    },
    {
        pageName: "About",
        pageLink: "/overall#about",
        pageIcon: <IoIosPerson/>
    }
]

const Navbar = () => {

    const [state, setState] = useState({
        right: false,

    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }
    const classes = useStyles()

    const sideList = slider => (
        <>
            <Box component ="div" onClick={toggleSlider(slider,false)} className={classes.menuSliderContainer}>
                <div className={classes.menuContainer}> 
                    <div className="menuTitle">
                        <Typography className="top">
                            Camille Sanchez
                        </Typography>
                        <Typography className="bottom">
                            Portfolio
                        </Typography>
                    </div>
                    <List>
                        {menuItems.map((lsItems, key) => (
                            <ListItem button key={key} >
                                <HashLink className= "menuIcon" to={lsItems.pageLink} >
                                    <ListItemIcon className= "menuIcon" >
                                        {lsItems.pageIcon}
                                    </ListItemIcon>
                                </HashLink>
                                <HashLink className= "menuText" to={lsItems.pageLink} >
                                    <ListItemText>
                                        {lsItems.pageName}
                                    </ListItemText>
                                </HashLink>
                            </ListItem>
                        ))}
                    </List>

                    <hr className="line" />

                    <Typography className="email">
                            camille.sanchez94@gmail.com
                    </Typography>
                </div>
            </Box>
        </>
    )

    return (
        <>

            <Box component= "nav">
                <AppBar position= "static" className={classes.navbarBox} >
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <HiMenu className={classes.menuIcon} />
                        </IconButton>

                        <Typography variant= "h5" className={classes.navbarText}>
                            Camille Sanchez
                        </Typography>
                        <MobilLeftMenuSlider 
                            anchor="left"
                            open={state.left}
                            onClose={toggleSlider("left"), false}
                            >
                            {sideList("left")}
                        </MobilLeftMenuSlider>
                        <Box component="div" className={classes.socialIconsBox}>
                            <IconButton className="socialIcon" onClick={() => window.open("https://www.linkedin.com/in/camille-sanchez-media/")}>
                                <FaLinkedin />
                            </IconButton>
                            
                            <IconButton className="socialIcon" onClick={() => window.open("https://www.instagram.com/cinecamia94_photo_video/")}>
                                <FaInstagram  /> 
                            </IconButton>

                            <>
                                <CopyToClipboard text="camille.sanchez94@gmail.com">
                                    <Tooltip title="Copy Email to Clipboard">
                                        <IconButton className="socialIcon" > 
                                            <MdEmail /> 
                                        </IconButton>
                                    </Tooltip>
                                </CopyToClipboard>
                            </>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
