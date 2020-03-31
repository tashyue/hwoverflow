import React, { Component } from "react";
import { Link } from 'react-router-dom';
import VideoThumbnail from "../components/videoThumbnail";
import '../style/profile.css';
import { withStyles, Button, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {       
    },
    button: {
        marginTop: theme.spacing(3), 
    }
}));

const Profile = () => {
    const classes = useStyles();
    const ownProfile = true;

    return (
        <div className={classes.root}>
            <NavBar />
                <div className ="content">
                    <div className="profile-container">
                        <div align="center">
                            <Typography variant="h4">User Name</Typography>
                        </div>
                    </div>
                    <div className="picture-container">
                        <img src= "profile_placeholder.png" alt= "Add a Profile Picture" />
                    </div>
                    <div classname="logout">
                        <div align="center">
                        {ownProfile && (
                            <Button
                                color='primary'
                                variant='contained'
                                className={classes.button}
                                size="large"
                            >
                                <a href="/Login">Logout</a>
                            </Button> 
                        )}    
                        </div>  
                    </div>
                    <div classname="edit_profile">
                        <div align="center">
                        {ownProfile && (  
                            <Button
                                color='primary'
                                variant='contained'
                                className={classes.button}
                                size="large"
                            >
                            <a href="/Edit_Profile">Edit Profile</a>
                            </Button>
                            )}
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
                <Typography variant="h4">Personal Info</Typography>
                    <div align="left">
                    <div className="user-info">
                        <Typography variant="h5">School</Typography>
                        <Typography variant="h5">Courses:</Typography>
                        <Typography variant="h7">- course 1</Typography>
                        <Typography variant="h7">- course 2</Typography>
                        <Typography variant="h7">- course 3</Typography>
                    </div>
                    </div>
                </div>
                </div>
            </div>

    )
}
export default withStyles(useStyles)(Profile);