import React from 'react';
import {withStyles} from '@material-ui/core'


const styles = {
    hero__bg__container:{
        height:"100vh",
        backgroundImage:"url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)",
        backgroundSize:"cover",
        borderBottomLeftRadius: "1000% 1000px",
        borderBottomRightRadius: "1000% 1000px",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        position:"relative",
        marginTop:"66px",
        flex:"1",
        zIndex:"-1"
    },
    hero__bg__content:{
        position:"absolute",
        top:"40vh",
        left:"5vw",
    },
    text_developer:{
        color:"var(--white)",
        fontSize:"25px"
    }
}


function HeroBG({classes}) {
    return (
        <>
        <section className={classes.hero__bg__container}>
            <div className={classes.hero__bg__content}>
                <h1>
                     
                </h1>
                <div className={classes.text_developer}>
                    Fullstack Developer from Bangalore, India
                </div>
            </div>
        </section>
       
        </>
    );
}

export default withStyles(styles)(HeroBG);