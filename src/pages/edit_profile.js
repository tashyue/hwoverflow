import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
const Edit_Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
        <div className ="content">
            <div className="profile-container">
                <div align="center">
                    <h1>User Name</h1>
                </div>
            </div>
            <div className="change_pic">
            <div align="center">
                <Button
                        color='primary'
                        variant='contained'
                        className={classes.button}
                        size="large"
                    >
                        Change Profile Picture
                </Button> 
                </div>                   
                </div>            
            <div className="picture-container">
                <img src= "profile_placeholder.png" alt= "Add a Profile Picture" />
            </div>
            <div classname="save_changes">
                <Link to="/Profile">
                <div align="center">
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.button}
                    size="large"
                >
                    save changes
                </Button> 
                </div>  
                </Link>
            </div>
            <div classname="cancel">
                <Link to="/Profile">
                <div align="center">  
                    <Button
                        color='primary'
                        variant='contained'
                        className={classes.button}
                        size="large"
                    >
                        cancel
                    </Button>
                </div> 
                </Link>
            </div>

        </div>
        <div align="center">
        <div className="info-container">
            <Button
                color='primary'
                variant='contained'
                className={classes.button}
                size="large"
            >
            Edit Information
            </Button>
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
    )
}

export default Edit_Profile;