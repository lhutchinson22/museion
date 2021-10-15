import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video src="/videos/videos-2.mp4" autoPlay loop muted /> */}
      <h1>Choose a door.</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button> */}
      </div>
    </div>
  );
};

export default HeroSection;
