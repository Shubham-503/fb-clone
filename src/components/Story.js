import { Avatar } from "@material-ui/core";
import React from "react";
import pic from "../image/pic.JPG";
import "./Story.css";

function Story({ src, profileSrc, title }) {
  return (
    <div className="story">
      <div className="img">
        <img src={src} alt="..." />
        <Avatar src={profileSrc} className="avatar" />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Story;
