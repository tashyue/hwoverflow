import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Edit_Profile extends Component {
    render(){
        return (
            <div>
                <div className ="content">
                    <div className="profile-container">
                    <h1>User Name</h1>
                    </div>
                    <div className="picture-container">

                    </div>
                    <div classname="cancel">
                        <Link to="/Profile">
                        <button className="large-button">Cancel</button>
                        </Link>
                    </div>
                    <div classname="save_changes">
                        <Link to="/Profile">
                        <button className="large-button">Save Changes</button>
                        </Link>
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

export default Edit_Profile;