import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";

import "./AddPost.css";

function AddPost() {
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    //some db stuff

    setMsg("");
    setImage("");
  };

  return (
    <div className="message">
      <div className="message__top">
        <form>
          <Avatar />
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="message__post"
            placeholder="what's on your mind?"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="message__image"
            placeholder="Image Url(Optional)"
          />
          <button onClick={handleClick}>Hidden Button</button>
        </form>
      </div>
      <div className="message__bottom">
        <div className="message__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message__option">
          <MoodIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
