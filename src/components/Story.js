import { Avatar } from "@material-ui/core";
import React from "react";
import pic from "../image/pic.JPG";
import "./Story.css";

function Story({ src }) {
  return (
    <div className="story">
      <div className="img">
        <img src={src} alt="..." />
        <Avatar classname="avatar" />
      </div>
    </div>
  );
}

export default Story;
