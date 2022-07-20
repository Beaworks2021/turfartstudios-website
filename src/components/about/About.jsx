import React from "react";
import "./About.css";
import {
  BsTwitter,
  BsInstagram,
  BsWhatsapp,
  BsBehance,
  BsYoutube,
} from "react-icons/bs";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";

const About = () => {
  return (
    <div className="container mainV vh-100">
      <div className="row">
        <div className="col-md-10 itemscont">
          <img src="Assets/New-Turf-DP-Across.jpg" alt="" className="abtimg" />
          <h3 className="abttitle">About</h3>
          <p className="abtparagraph">
            Turf is an expressive artist drawing inspiration from the storied
            history of <br />
            Africa and of the world. With a unique eye and visual art style,
            Turf carves a way for many to <br /> follow by creating art that
            inspires perfection. Based in Accra, Ghana
          </p>
          <h3 className="abttitle">Contacts</h3>
          <p className="abtparagraph">
            Email:
            <span className="textcol"> turfstudios.gh@gmail.com</span>
          </p>
          <p className="abtparagraph">
            Phone:
            <span className="textcol">
              {" || "}
              +233 245 785 022 {"  ||  "} +233 558 140 023
            </span>
            <div className="abtCol">
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <GrFacebookOption />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <BsTwitter />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <BsInstagram />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <BsBehance />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <GrLinkedinOption />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <BsYoutube />
              </a>
              <a
                className="abticons"
                href="https://www.facebook.com/Turf-101277068653192"
              >
                <BsWhatsapp />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
