import React, { Component} from 'react'
import '../style/videoThumbnail.css'

class VideoThumbnail extends Component {
    render() {
        return (
            <div className="thumbnail">
                <div className="video-thumbnail"></div>
                <div className="video-info-container">
                    <p className="video-title">How do I solve this?</p>
                    <div className="video-info">
                        <div className="profile-photo"></div>
                        <div className="name-container">
                            <p className="username">Jacob Jennings</p>
                            <p className="class-name">Calculus I</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoThumbnail;