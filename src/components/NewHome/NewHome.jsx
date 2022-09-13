import React from "react";
import "./NewHome.css";
import "./pureCssWeatherIcons.css";

function NewHome() {
  return (
    <>
      {/* <!-- Status Bar --> */}
      <div id="status">
        <p></p>
        <button className="close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>

      {/* <!-- Current Weather --> */}
      <div id="current" className="wrapper">
        <nav>
          <button id="locateBtn">
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
          </button>
          <button id="unitBtn" data-units="f">
            f
          </button>
        </nav>
        <h1 className="location">Chicago, IL</h1>
        <h2 className="date">Sunday, January 1, 2017</h2>
        <div className="weatherIcon">
          <div className="sunny">
            <div className="inner"></div>
          </div>
        </div>
        <p className="temp">72</p>
        <p className="conditions">Sunny</p>
      </div>

      {/* <!-- Future Forecast --> */}
      <div id="future" className="wrapper">
        <div className="container">
          <h3 className="day">Mon</h3>
          <div className="weatherIcon">
            <div className="partlycloudy">
              <div className="inner"></div>
            </div>
          </div>
          <p className="conditions">Partly Cloudy</p>
          <p className="tempRange">
            <span className="high">64</span> | <span className="low">48</span>
          </p>
        </div>
        <div className="container">
          <h3 className="day">Tue</h3>
          <div className="weatherIcon">
            <div className="mostlycloudy">
              <div className="inner"></div>
            </div>
          </div>
          <p className="conditions">Mostly Cloudy</p>
          <p className="tempRange">
            <span className="high">57</span> | <span className="low">45</span>
          </p>
        </div>
        <div className="container">
          <h3 className="day">Wed</h3>
          <div className="weatherIcon">
            <div className="rain">
              <div className="inner"></div>
            </div>
          </div>
          <p className="conditions">Chance of Rain</p>
          <p className="tempRange">
            <span className="high">63</span> | <span className="low">59</span>
          </p>
        </div>
      </div>
      <footer>
        <p id="lastUpdated">Last updated at 12:00pm</p>
      </footer>
    </>
  );
}

export default NewHome;
