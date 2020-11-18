import React, { useState } from "react";
import { 
    Grid,
    makeStyles,
    Container,
    IconButton,
    Typography,
    Tooltip
} from "@material-ui/core";
import FilmCard from "./FilmCard";
import { BsChevronDoubleDown } from "react-icons/bs";

// Media imports
import { 
    microfinance,
    probono,
    oceanprotection,
    fellowship,
    veteranscare,
    mac1,
    afterthestorms
} from "../utils/constants";

// CSS Styles
const useStyles = makeStyles((theme) => ({
    textContainer: {
        padding: "0rem 8rem",
        [theme.breakpoints.down("sm")]: {
            padding: "0rem 4rem"
        }
    },
    paper: {
        height: "394px",
        width: "700px",
        background: "black",
        [theme.breakpoints.up("lg")]: {
            height: "506px",
            width: "900px"
        },
        [theme.breakpoints.down("sm")]: {
            height: "309px",
            width: "550px"
        },
        [theme.breakpoints.down("xs")]: {
            height: "197px",
            width: "350px"
        }
    },
    imageCover: {
        maxWidth: "900px",
        maxHeight: "506px",
        alignItems: "center",
        justifyContent: "center",
        opacity: "1",
        "&:hover": {
            opacity: "0.5"
        }
    },
    button: {
        position: "relative",
        paddingTop: "0.5rem",
        [theme.breakpoints.down("xs")]:{
            paddingTop: "0rem"
        }
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
const filmItems = [
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: oceanprotection,
        filmAlt: "BNP Paribas Protection of the Oceans Video photo cover",
        filmTitle: "Interview on Ocean Protection",
        filmDesc: `Chat with Laurence Pessez, Antoine Sire & Craig Leeson about the importance of protecting our oceans during this "climate crisis".`,
        filmTasks: 'Producer, Director, Sound & Camera Operator & Editor (Additional medias by Getty Images)',

        filmLink: "https://twitter.com/BNPParibasAPAC/status/1179582903782498306",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6632653635014676480/",
        filmTwitterLink: "https://twitter.com/BNPParibasAPAC/status/1179582903782498306",
        filmYouTubeLink: "",
        filmVimeoLink: "",
        filmArticle: ""
    },
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: microfinance,
        filmAlt: "Microfinance Video photo cover",
        filmTitle: "Opening up the Economy for America's Women Entrepreneurs",
        filmDesc: "BNP Paribas' partnership with Grameen America allow to help women entrepreneurs build their own businesses to in turn achieve a better life.",
        filmTasks: "Producer, Director, Sound & Camera Operator & Editor (Additional medias by Getty Images.)",

        filmLink: "https://www.youtube.com/watch?v=2NJali5No8Q&feature=youtu.be&ab_channel=BNPParibas",
        filmYouTubeLink: "https://www.youtube.com/watch?v=2NJali5No8Q&feature=youtu.be&ab_channel=BNPParibas",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6630122671910772736/",
        filmTwitterLink: "https://twitter.com/BNPPamericas/status/1224360571874762752",
        filmVimeoLink: "",
        filmArticle: ""
    },
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: probono,
        filmAlt: "BNP Paribas Legal Probono Video photo cover",
        filmTitle: "Helping To Create a New Start in the U.S.A",
        filmDesc: "BNP Paribas Legal team worked on a pro bono basis with the New York City Bar to victims of violent crimes to apply to a nonimigrant status (U-Visas) in the U.S.A.",
        filmTasks: "Producer, Director, Sound & Camera Operator & Editor (Additional medias by Getty Images)",

        filmLink: "https://www.youtube.com/watch?v=-CU0ZjitCYc&feature=emb_logo&ab_channel=BNPParibas",
        filmYouTubeLink: "https://www.youtube.com/watch?v=-CU0ZjitCYc&feature=emb_logo&ab_channel=BNPParibas",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6585344041821487104/",
        filmTwitterLink: "https://twitter.com/BNPPamericas/status/1226895529336025088",
        filmVimeoLink: "",
        filmArticle: ""
    },
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: mac1,
        filmAlt: "BNP Paribas Team Mac1 Video photo cover",
        filmTitle: '"Mac 1 Team" Program in New York City',
        filmDesc: `Interview with Patrick and John McEnroe about the "Mac 1 Team" program's launch in New York City, where 10 kids from 11 to 14 will be professionally and personally coached to become the next top generation of tennis players.`,
        filmTasks: "Director, Sound & Camera Operator & Interviewer (Edited by BNP Paribas Group)",

        filmLink: "https://www.youtube.com/watch?v=3ZcblHgdf64&ab_channel=WeAreTennisparBNPParibas",
        filmYouTubeLink: "https://www.youtube.com/watch?v=3ZcblHgdf64&ab_channel=WeAreTennisparBNPParibas",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6512368727575662592/",
        filmTwitterLink: "https://twitter.com/BNPPamericas/status/1106600998192082944",
        filmVimeoLink: "",
        filmArticle: ""
    },
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: fellowship,
        filmAlt: "BNP Paribas Fellowship Program Video photo cover",
        filmTitle: "Employees' skills can go way beyond business",
        filmDesc: "BNP Paribas Volunteers went to La Comunidad de Niños Sagrada Familia orphanage (in Peru), as part of The Fellowship Program, to share their skills and expertise to improve the daily lives of 1,500 children.",
        filmTasks: "Producer, Director, Sound & Camera Operator & Editor (Additional medias by the 5 fellows/ volunteers)",

        filmLink: "https://www.youtube.com/watch?v=MtFKpPMcqTY&feature=emb_logo&ab_channel=BNPParibas",
        filmArticle: "https://group.bnpparibas/en/news/volunteer-program-bnp-paribas-employees-peru",
        filmYouTubeLink: "https://www.youtube.com/watch?v=MtFKpPMcqTY&feature=emb_logo&ab_channel=BNPParibas",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6593223386338512898/",
        filmTwitterLink: "https://twitter.com/BNPPamericas/status/1187757192465829890",
        filmVimeoLink: ""
    },
    {
        doneAtWork: true,
        companyName: "BNP Paribas",
        companyColor: "#00925B",
        filmCover: veteranscare,
        filmAlt: "BNP Paribas Veterans Care Video photo cover",
        filmTitle: "Helping Veterans Return To Work",
        filmDesc: "BNP Paribas Veterans Employee Resource Group worked on a program to help veterans with PTSD to have improved employment outcomes.",
        filmTasks: "Co-Producer (with Social Finance team), Sound & Camera Operator & Editor (Additional medias by Social Finance & Getty Images)",

        filmLink: "https://www.youtube.com/watch?v=BRNt5pJq29U&feature=emb_logo&ab_channel=BNPParibas",
        filmYouTubeLink: "https://www.youtube.com/watch?v=BRNt5pJq29U&feature=emb_logo&ab_channel=BNPParibas",
        filmArticle: "https://cib.bnpparibas.com/sustain/how-can-social-impact-bonds-help-veterans-return-to-work-_a-3-2591.html",
        filmLinkedInLink: "https://www.linkedin.com/feed/update/urn:li:activity:6493481764110032897/",
        filmVimeoLink: "",
        filmTwitterLink: ""
    },
    {
        doneAtWork: false,
        companyColor: "none",
        filmCover: afterthestorms,
        filmAlt: "After The Storms, photo cover",
        filmTitle: "After The Storms",
        filmDesc: "Short documentary about the erosion of the peninsula of Cap Ferret (Bassin d'Arcachon, France) and the fight of its inhabitants to protect it.",
        filmTasks: "Producer, Director, Sound & Camera Operator & Editor",

        filmLink: "https://vimeo.com/210873459",
        filmVimeoLink: "https://vimeo.com/210873459",
        filmArticle: "",
        filmYouTubeLink: "",
        filmLinkedInLink: "",
        filmTwitterLink: ""
    }
]

const filmItemsShown = (counter) => {
    
    const filmData = [] 

    if (counter > filmItems.length) {
        counter = filmItems.length
    }

    for (let i=0; i<counter; i++) {
        filmData.push(filmItems[i])
    } 
    return filmData
}

// Function
const FilmGrid = () => {

    const [gridNumber, setGridNumber] = useState(3)

    const classes = useStyles()

    return (
        <>
            <Container className={classes.textContainer}>
                <Grid container >
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {filmItemsShown(gridNumber).map((lsItems, key) => (
                                <Grid key={key} item>
                                    <FilmCard lsItems={lsItems} />  
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                
                { gridNumber < filmItems.length &&
                    <div className={classes.button}>
                        <Grid container justify="center" >
                            <Tooltip title="Once Clicked, Scroll Up for Added Videos">
                                <IconButton>
                                    <BsChevronDoubleDown className={classes.moreButton} onClick={() => setGridNumber(gridNumber+3)} />
                                </IconButton>
                            </Tooltip>
                            <Typography className={classes.textMoreButton}>
                                More Videos...
                            </Typography>

                        </Grid>
                    </div>
                }
                
            </Container>
        </>
    )
};

export default FilmGrid;