import React, { Component } from "react";
import { Link } from 'react-router-dom';
import VideoThumbnail from "../components/videoThumbnail";
import '../style/profile.css';
import { Button, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    content: {
        textAlign: 'center',
        marginTop: theme.spacing(8)
    },
    button: {
        marginTop: theme.spacing(3), 
    }
}));

const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
        <div className ="content">
            <div className="profile-container">
            <h1>User Name</h1>
            </div>
            <div className="picture-container">

            </div>
            <div classname="logout">
                <Link to="/Login">
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    size="large"
                >
                    logout
                </Button>   
                </Link>
            </div>
            <div classname="edit_profile">
                <Link to="/Edit_Profile">
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    size="large"
                >
                    Edit Profile
                </Button>                </Link>
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
        <div className="info-container">
            <h1>Personal Info</h1>
            <div className="user-info">
                <h2> School: </h2>
                <h2> Courses: </h2>
                <h3>- course 1</h3>
                <h3>- course 2</h3>
                <h3>- course 3</h3>
            </div>
        </div>
    </div>
    )
}

export default Profile;