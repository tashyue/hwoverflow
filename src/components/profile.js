import React, { Component } from "react";
import { Link } from 'react-router-dom';
import VideoThumbnail from "./videoThumbnail";
import '../style/profile.css';

class Profile extends Component {
    render(){
        return (
            <div>
                <div className ="content">
                    <div className="profile-container">
                    <h1>User Name</h1>
                    </div>
                    <div className="picture-container">

                    </div>
                    <div classname="logout">
                        <Link to="/Login">
                        <button className="large-button">Log Out!</button>
                        </Link>
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
}

export default Profile;