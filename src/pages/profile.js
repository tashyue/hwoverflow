import React, { Component } from "react";
import { Link } from 'react-router-dom';
import VideoThumbnail from "../components/videoThumbnail";
import '../style/profile.css';
import {withStyles, Button, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = theme => ({
    root: {
        
    },
    content: {
        textAlign: 'center',
        marginTop: theme.spacing(8)
    },
    button: {
        marginTop: theme.spacing(3), 
    }
});

class Profile extends Component {
    render() {
    const { classes } = this.props
    return (
        <React.Fragment>
            <main>
        <div className={classes.root}>
            <NavBar />
        <div className ="content">
            <div className="profile-container">
                <div align="center">
                    <h1>User Name</h1>
                </div>
            </div>
            <div className="picture-container">
                <img src= "profile_placeholder.png" alt= "Add a Profile Picture" />
            </div>
            <div classname="logout">
                <div align="center">
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    size="large"
                >
                    <a href="/Login">Logout</a>
                </Button> 
                </div>  
            </div>
            <div classname="edit_profile">
                <div align="center">  
                    <Button
                        color='primary'
                        variant='contained'
                        className={classes.button}
                        size="large"
                    >
                    <a href="/Edit_Profile">Edit Profile</a>
                    </Button>
                </div> 
            </div>

        </div>
        <div className="row-container">
            <h1>My Posts</h1>
            {/* <hr></hr> */}
            <div className="video-container">
                <span><VideoThumbnail /></span>
                <span><VideoThumbnail /></span>
                <span><VideoThumbnail /></span>
            </div>
        </div>
        <div align="center">
        <div className="info-container">
            <h1>Personal Info</h1>
            <div align="left">
            <div className="user-info">
                <h2> School: </h2>
                <h2> Courses: </h2>
                <h3>- course 1</h3>
                <h3>- course 2</h3>
                <h3>- course 3</h3>
            </div>
            </div>
        </div>
        </div>
    </div>
    </main>
    </React.Fragment>
    );
}
}
export default withStyles(useStyles)(Profile);