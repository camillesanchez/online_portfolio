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
        background: "black",
        "& .menuHamburgerIcon": {
            color: "white",
            fontSize: "22px",
            padding: "0",
            [theme.breakpoints.down("sm")]: {
                fontSize: "18px"
            }
        },
        "& .navbarText": {
            fontFamily: "Georgia",
            fontSize: "25px",
            [theme.breakpoints.down("sm")]: {
                fontSize: "17px",
            } 
        },
        "& .socialIconsBox":{
            position: "absolute",
            right: "3%",
            "& .socialIcon": {
                padding: "15px",
                color: "white",
                fontSize: "29px",
                [theme.breakpoints.down("sm")]: {
                    padding: "8px",
                    fontSize: "22px",
                },
                [theme.breakpoints.down("xs")]: {
                    padding: "5px",
                    fontSize: "19px",
                }
            }
        },
    },
    menuSliderContainer: {
        width: "300px",
        minHeight: "100%",
        background: "black",
        position: "flex",
        [theme.breakpoints.down("sm")]: {
            width: "200px",
        },
        "& .menuContainer": {
            margin: "10%",
            // top:"3rem",
            // left: "1rem",
            // right: "1rem",
            // height: "100vh",
            paddingBottom: "30%",
            background: "yellow",
            "& .menuTitle": {
                color: "red",
                textAlign: "center",
                padding: "10% 0",
                "& .top": {
                    fontSize: "20px",
                    fontWeight: "bold",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "18px"
                    }
                },
                "& .bottom": {
                    fontSize: "18px",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "15px"
                    }
                }
            },
            "& .menuLinks": {
                textDecoration: "none",
                "& .menuText" : {
                    color: "white",
                    fontSize: "18px",
                    // marginLeft: "-40px",
                    [theme.breakpoints.down("sm")]: {
                        color: "green",
                        background: "pink",
                        fontSize: "40px",
                    } 
                }
            },
            "& .menuIcon" : {
                color: "white",
                fontSize: "22px",
                padding: "0",
                display: "inline",
                [theme.breakpoints.down("sm")]: {
                    background: "orange",
                    fontSize: "19px",
                } 
            },
            "& .emailBlock": {
                background: "orange",
                // height: "100%",
                paddingBottom: "10%",
                "& .line": {
                    color: "white",
                    backgroundColor: "white", 
                    height: "5", 
                    width: "30%", 
                    justifyContent: "center",
                },
                "& .email": {
                    color: "white",
                    fontSize: "12px",
                    textAlign: "center",
                    paddingTop: "0.5rem"
                }
            }

        },
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
                <div className="menuContainer"> 
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

                                <ListItem>

                                        <div>
                                        {/* className= "menuIcon" */}
                                            <ListItemIcon className= "menuIcon" >
                                                {lsItems.pageIcon}
                                            </ListItemIcon>
                                            {/* className= "menuText" */}
                                            <HashLink key={key} to={lsItems.pageLink} className="menuLinks" >  

                                                <ListItemText className= "menuText">
                                                    {lsItems.pageName}
                                                </ListItemText>
                                            </HashLink>
                                        </div>
                                    
                                </ListItem>
                            

                        ))}
                    </List>
                    <div className= "emailBlock"> 
                    
                        <hr className="line" />

                        <Typography className="email">
                                camille.sanchez94@gmail.com
                        </Typography>
                    </div>
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
                            <HiMenu className="menuHamburgerIcon" />
                        </IconButton>

                        <Typography variant= "h5" className="navbarText">
                            Camille Sanchez
                        </Typography>
                        <MobilLeftMenuSlider 
                            anchor="left"
                            open={state.left}
                            onClose={toggleSlider("left"), false}
                            >
                            {sideList("left")}
                        </MobilLeftMenuSlider>
                        <Box component="div" className="socialIconsBox">
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
