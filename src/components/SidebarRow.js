import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon fontSize="large" />}
      {src && <Avatar src={src} />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
