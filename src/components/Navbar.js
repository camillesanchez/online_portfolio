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
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { MdEmail, MdPhotoCamera } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { GiFilmProjector } from "react-icons/gi";

// Don't delete these imports --> used for the menu bar once clicked on icon
import { HiMenu } from "react-icons/hi";
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
        minHeight: "100vh",
        background: "black",
        position: "flex",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            width: "200px",
        },
        [theme.breakpoints.up("md")]: {
            width: "400px",
        },
        "& .menuContainer": {
            margin: "10%",
            height: "100%",
            paddingBottom: "30%",
            "& .menuTitle": {
                color: "white",
                textAlign: "center",
                padding: "10% 0 15%",
                "& .top": {
                    fontSize: "24px",
                    fontWeight: "bold",
                    [theme.breakpoints.up("md")]: {
                        fontSize: "34px"
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "24px"
                    },
                    [theme.breakpoints.down("xs")]: {
                        fontSize: "17px"
                    }
                },
                "& .bottom": {
                    fontSize: "22px",
                    [theme.breakpoints.up("md")]: {
                        fontSize: "32px"
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "22px"
                    },
                    [theme.breakpoints.down("xs")]: {
                        fontSize: "14px"
                    }
                }
            },
            "& .insideMenu": {
                "& .menuLinks": {
                    textDecoration: "none",
                    marginLeft: "2%",
                    "& .menuText" : {
                        color: "white",
                        fontSize: "18px",
                        display: "inline-block",
                        marginBottom: "2%",
                        [theme.breakpoints.up("lg")]: {
                            fontSize: "40px",
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "60px",
                        },
                        [theme.breakpoints.down("xs")]: {
                            fontSize: "30px",
                        } 
                    }
                },
                "& .menuIcon" : {
                    color: "white",
                    fontSize: "22px",
                    marginRight: "3%",
                    display: "inline",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "15px",
                    } 
                }
            }
        },
        "& .emailBlock": {
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
                fontSize: "16px",
                textAlign: "center",
                paddingBottom: "2%",
                [theme.breakpoints.up("md")]: {
                    paddingTop: "5%",
                    fontSize: "20px"
                },
                [theme.breakpoints.down("sm")]: {
                    paddingTop: "4%",
                    fontSize: "16px"
                },
                [theme.breakpoints.down("xs")]: {
                    paddingTop: "3%",
                    fontSize: "11px"
                }
            }
        }
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
                            <ListItem className="insideMenu">
                                <div >
                                    <ListItemIcon className= "menuIcon" >
                                        {lsItems.pageIcon}
                                    </ListItemIcon>
                                    <HashLink key={key} to={lsItems.pageLink} className="menuLinks" >  
                                        <ListItemText className= "menuText">
                                            {lsItems.pageName}
                                        </ListItemText>
                                    </HashLink>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className= "emailBlock"> 
                    
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
                        <>
                            {/* ---- !!!!! DON'T DELETE IT'S THE NAV BAR BUTTON OPENING MENU !!!! ---- */}
                                {/* <IconButton onClick={toggleSlider("left", true)}>
                                    <HiMenu className="menuHamburgerIcon" />
                                </IconButton> */}
                        </>

                        <Typography variant= "h5" className="navbarText">
                            Camille Sanchez
                        </Typography>

                        <>
                            {/* ---- !!!!! DON'T DELETE IT'S THE MENU TIED TO NAV BAR BUTTON !!!! ---- */}
                                {/* <MobilLeftMenuSlider 
                                    anchor="left"
                                    open={state.left}
                                    onClose={toggleSlider("left"), false}
                                    >
                                    {sideList("left")}
                                </MobilLeftMenuSlider> */}
                        </>

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
