import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="logo">
          <h3>Subject 1</h3>
            <figure> 
              <video width="320" height="200" controls="controls" mute="mute" preload="auto"> // link to video view page 
                <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
              </video>
              <figcaption> Sample video by: bobby</figcaption>
              <ensp> </ensp>
              <video width="320" height="200" controls="controls" mute="mute" preload="auto">
                <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
              </video>
              <figcaption> Sample video by: bobby</figcaption>
              <ensp> </ensp>
              <video width="320" height="200" controls="controls" mute="mute" preload="auto">
                <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
              </video>
              <figcaption> Sample video by: bobby</figcaption>
            </figure>
          <h3>Subject 2</h3>

          <h3>Subject 3</h3>
        </div>
      </div>
    )
  }

}

export default Dashboard;
