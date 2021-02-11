import { withStyles } from '@material-ui/core';
import React from 'react';
import Navbar from '../Components/Header/Navbar';
import HeroBG from '../Components/HeroContainer/HeroBG';
import classNames from 'classnames'

import {
    ScrollingProvider,
   
    Section,
  } from 'react-scroll-section';
// Import Swiper styles


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
        color:"var(--white)",
        borderBottomLeftRadius: "1000% 1000px",
        borderBottomRightRadius: "1000% 1000px",
       
    },
    project__card__content:{
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        backgroundColor:"var(--white)",
        padding:"2vw"
    },
    img__container:{
        backgroundColor:"var(--white)",
        height:"450px",
        overflow:"hidden"
    },
    project__tech__tools:{
        display:"flex",
        flexWrap:"wrap",
        
        "& div":{
            width:"40px",
            margin:"10px 10px 0 0"
        },
        "& img":{
            width:"100%"
        }
    },
    project__tech__info:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
       
    },
    project__card__container:{
        display:"grid",
        color:"black",
        textAlign:"left",
        gridTemplateColumns:"1fr 1fr 1fr",
        gridGap:"2vw",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
        "& img":{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            width:"100%"
        },
        "@media (max-width:1020px)":{
            gridTemplateColumns:"1fr 1fr",
            
        },
        "@media (max-width:780px)":{
            gridTemplateColumns:"1fr",
            
        }
    },

    techImgContainer:{
        display:"flex",
        width:"100%",
        flexWrap:"wrap",
        
        justifyContent:"center",
        alignItems:"center",
        "& img":{
            margin:"20px 20px 0 0"
        }
    },
   
    menuButton:{
        width:"120px",
        
        marginRight:"20px",
        borderRadius:"50px",
        cursor:"pointer",
        outline:"none",
        border:"0.01em solid #cfcccc",
        boxShadow:" 0px 1px 1px #b6b3b3 ",
        font:"inherit",
        color:"inherit",
       
        padding:" 10px 10px",
        
        
        transition:"0.2s all ease-in",
        // "@media (max-width:768px)":{
           
        //     margin:"8px 0 ",
        // },
        "&:hover":{
            border:"0.01em solid var(--bgGreen)",
            boxShadow:" 0px 1px 1px  var(--bgGreen)",
            transform:"scale(1.05)"
        }
    },
    green:{
        backgroundColor:"var(--bgGreen)",
        color:"var(--white)",
        boxShadow:" unset",
    },
    techContainer:{
        textAlign:"center",
        padding:"0 6vw",
        marginBottom:"40px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    experince:{
        padding:"40px 6vw",
    }
}



function Home({classes}) {
  
    return (
       <ScrollingProvider>
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

            <section className={classes.techContainer} >
                <h2>Tools and Technologies</h2>
                <div className={classes.techImgContainer}>
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                    <img alt = "tech-pic" height="100" src="data:image/png;base64,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" />
                    <img alt = "tech-pic" height="100" src="https://symbols.getvecta.com/stencil_25/77_sass.ba26158d9f.png" />
                    <img alt = "tech-pic" height="100" src="https://img.icons8.com/color/452/bootstrap.png" />
                    <img alt = "tech-pic" height="100"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                    <img alt = "tech-pic" height="100" src="https://material-ui.com/static/logo.png" />
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
                    <img alt = "tech-pic" height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
                    <img alt = "tech-pic" height="100" src="https://img.favpng.com/20/4/0/node-js-javascript-react-mean-angularjs-png-favpng-9jx9sihXGEqtr5xCmpXZtGFjQ.jpg" />
                    <img alt = "tech-pic" height="100" src="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png" />
                    <img alt = "tech-pic" height="100" src="https://i.imgur.com/Rq9TURL.png" />
                </div>
                   
            </section>


            <Section id="projects" className={classes.project__container}>
                <h2>
                    Featured Projects
                </h2>
                <p>
                Below you can find a wide variety of projects.
                For these you can check out both the code and a live version of the project. 
                If you're interested in my work you're welcome to check out the other public repositories on my GitHub profile
                </p>
               
       
        
            <div className={classes.project__card__container}>
                <div className={classes.project__card}>
                    <div className={classes.img__container}>
                        <img  src="/images/netflix.png" alt="netflix" />
                    </div>
                   
                   <div className={classes.project__card__content}>
                        <h2>Netflix</h2>
                        <p>
                            The Netflix clone was given as project for our build week.
                            The team cosisted of four memebers and the duration for this project
                            was four days.The tech stacks used were React for the frontend, Redux for state 
                            management at the client side. Node and Express were used for the Backend Integration
                            and Mongo Db was used to persist the data
                        </p>
                        <div className={classes.project__tech__info}>
                            <h3>Technologies Used</h3>
                            <div className={classes.project__tech__tools}>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://e7.pngegg.com/pngimages/301/171/png-clipart-node-js-javascript-software-developer-computer-icons-angularjs-others-miscellaneous-text-thumbnail.png" />
                                </div>
                                <div>
                                    <img alt = "tech-pic" height="40" src="https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" />
                                </div>
                                
                            </div>
                            <div>
                                <button className={ classNames(classes.menuButton,classes.green)}>Live Version</button>
                                <button className={ classes.menuButton}>Code</button>
                            </div>
                        </div>
                        
                   </div>
                </div>
                

               

                
            </div>

          
    
            </Section>
            <section className={classes.experince}>
                <div className="circle small">
                    <h2>
                        100+ Hours
                    </h2>
                    <p>
                        Softxsill Training
                    </p>
             
                </div>
                <div className="circle small">
                <h2>
                        100+ Hours
                    </h2>
                    <p>
                        Softskills Training
                    </p>
             
                </div>
                <div className="circle small">
                    <h2>
                        1200+ Hours
                    </h2>
                    <p>
                        Fullstack coding
                    </p>
                </div>
                <div className="circle small">
                    <h2>
                        1200+ Hours
                    </h2>
                    <p>
                        Datastructures and Algorithms
                    </p>
                </div>
                <div className="circle small">
                    <h2>
                        450+ 
                    </h2>
                    <p>
                    Git Commits
                    </p>
                </div>
            </section>
       
           
        </ScrollingProvider>
    );
}

export default withStyles(styles)(Home);



{/* <img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" /> */}