import React, { Component } from "react";
import VideoThumbnail from "./videoThumbnail";
import "../style/dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="row-container">
                <h1>Math</h1>
                {/* <hr></hr> */}
                <div className="video-container">
                    <span><VideoThumbnail /></span>
                    <span><VideoThumbnail /></span>
                    <span><VideoThumbnail /></span>
                </div>
            </div>
            <div className="row-container">
            <h1>Computer Engineering</h1>
            {/* <hr></hr> */}
            <div className="video-container">
                <span><VideoThumbnail /></span>
                <span><VideoThumbnail /></span>
                <span><VideoThumbnail /></span>
            </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;