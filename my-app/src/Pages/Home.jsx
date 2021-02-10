import { withStyles } from '@material-ui/core';
import React from 'react';
import Navbar from '../Components/Header/Navbar';
import HeroBG from '../Components/HeroContainer/HeroBG';


const styles = {
    about__me:{
        padding:"6vw",
        "& h2":{
            textAlign:"center",
            color:"var(--bgGreen)",
            fontWeight:"bolder",
            fontSize:"34px",
            marginBottom:"10px"
        },
        
        
    },
    p__img__container:{
        display:"flex",
        alignItems:"center",
        "& p":{
            lineHeight:"1.8rem",
            fontSize:"22px",
            margin:"20px"
        },
        "& img":{
            width:"250px"
        },
        "@media (max-width:780px)":{
            flexDirection:"column-reverse"
            
        }
    },
    project__container:{
        padding:"6vw",
        textAlign:"center",
        borderTopLeftRadius: "1000% 1000px",
        borderTopRightRadius: "1000% 1000px",
        backgroundColor:"var(--bgGreen)",
        color:"var(--white)"
    },
    project__card__content:{
        height:"250px",
        backgroundColor:"var(--white)"
    },
    img__container:{
        backgroundColor:"var(--white)",
        height:"450px",
        overflow:"hidden"
    },
    project__card__container:{
        display:"grid",
        
        
        gridTemplateColumns:"1fr 1fr 1fr",
        gridGap:"2vw",
        "& img":{
            
            width:"100%"
        },
        "@media (max-width:780px)":{
            gridTemplateColumns:"1fr",
            
        }
    }
}



function Home({classes}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <>
            <Navbar />
            
            <HeroBG />
            <section className={classes.about__me}>
                <h2>
                    About Me
                </h2>
                <div className={classes.p__img__container}>
                    <p>
                        Hi I am Mahen and I have a passion to develop slick and robust web applications.
                        I am a hard working individual who loves to solve problems.
                        I firmly belive in delignt practice.
                        I love reading comics, playing video games and watching videos of space and wildlife
                    </p>
                    <img src="/images/avatar.svg" alt=""/>
                </div>
                
            </section>
            <section className={classes.project__container}>
                <h2>
                    Featured Projects
                </h2>
                <p>
                Below you can find a vide variety of projects.
                For these you can check out both the code and a live version of the project. 
                If you're interested in my work you're welcome to check out the other public repositories on my GitHub profile
                </p>
               
       
        
            <div className={classes.project__card__container}>
                <div className={classes.project__card}>
                    <div className={classes.img__container}>
                        <img src="/images/netflix.png" alt="netflix" />
                    </div>
                   
                   <div className={classes.project__card__content}>

                   </div>
                </div>

                <div className={classes.project__card}>
                    <div className={classes.img__container}>
                        <img src="/images/github.png" alt="github" />
                    </div>
                   
                   <div className={classes.project__card__content}>

                   </div>
                </div>

               

                
            </div>

        
    
            </section>
        </>
    );
}

export default withStyles(styles)(Home);