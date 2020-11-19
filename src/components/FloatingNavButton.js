import React, { useState } from 'react';
import { makeStyles, Container, Fab } from '@material-ui/core/';
import { HashLink } from 'react-router-hash-link';
import { IoIosPerson } from "react-icons/io";
import { GiFilmProjector } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    container: {
        "& .mainMenuIcon": {
            position: "fixed",
            right: "30px",
            bottom: "260px",
            color: "#EDF4FF",
            background: "black",
            fontSize: "45px",
            width: "80px",
            height: "80px",
            zIndex: "6",
            [theme.breakpoints.down("md")]:{
                right: "45px",
                bottom: "80px",
                width: "50px",
                height: "50px",
                fontSize: "30px"
            },
            [theme.breakpoints.down("sm")]:{
                right: "9px",
                bottom: "45px",
                width: "40px",
                height: "40px",
                fontSize: "25px",
            }
        },
        "& .overallIcons": {
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingRight: "40px",
            right: "0px",
            bottom: "340px",
            zIndex: "6",
            [theme.breakpoints.down("md")]:{
                paddingRight: "52px",
                bottom: "135px",
            },
            [theme.breakpoints.down("sm")]:{
                paddingRight: "10px",
                bottom: "85px",
            }
        },
    },
    smallIcon:{
        color: "black",
        background: "#EDF4FF",
        marginBottom: "15px",
        width: "60px",
        height: "60px",
        fontSize: "27px",
        [theme.breakpoints.down("md")]:{
            width: "38px",
            height: "38px",
            fontSize: "14px",
            marginBottom: "10px",
        },
        [theme.breakpoints.down("sm")]:{
            width: "35px",
            height: "35px",
            fontSize: "15px",
            marginBottom: "10px",
        }
    },
}))

const FloatingNavButton = () => {
    const classes = useStyles();

    const [isIconShown, setisIconShown] = useState(false);

    return (
        <>
            <div className={classes.container}>
                <Fab variant="round" className="mainMenuIcon" onClick={() => setisIconShown(!isIconShown)}>
                    <HiMenu />
                </Fab>
                { isIconShown &&
                    <div >
                        <Container className="overallIcons"> 
                            <HashLink to="/" >
                                <Fab variant="round" className={classes.smallIcon}>
                                    <FaHome />
                                </Fab>
                            </HashLink>
                            <HashLink to="/overall#filmography" >
                                <Fab variant="round" className={classes.smallIcon}>
                                    <GiFilmProjector />
                                </Fab>
                            </HashLink>
                            <HashLink to="/overall#photography" >
                                <Fab variant="round" className={classes.smallIcon}>
                                    <MdPhotoCamera />
                                </Fab>
                            </HashLink>
                            <HashLink to="/overall#about" >
                                <Fab variant="round" className={classes.smallIcon}>
                                    <IoIosPerson />
                                </Fab>
                            </HashLink>
                        </Container>
                    </div>
                }
            </div>

        </>
    );
}
export default FloatingNavButton;