import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ViewCompactTwoToneIcon from "@material-ui/icons/ViewCompactTwoTone";
import { IconButton, Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { useStateValue } from "../context/StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="fb-logo"
        />
        <div className="header__search">
          <SearchOutlinedIcon
            className="header__searchIcon"
            style={{ color: "#7c828a" }}
          />
          <input
            className="header__searchText"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="header__center">
        <div className="header__centerHome activeNav">
          <HomeOutlinedIcon fontSize="large" style={{ color: "#2e7ef7" }} />
        </div>

        <div className="header__centerWatch">
          <OndemandVideoOutlinedIcon fontSize="large" />
        </div>

        <div className="header__centerMarketPlace">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header__centerGroup">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>

        <div className="header__centerGaming">
          <ViewCompactTwoToneIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightAvatar">
          <div className="header__rightAvatar__image">
            <Avatar src={user.photoURL} fontSize="large" />
          </div>
          <div className="header__rightAvatar__name">
            <h4>{user.displayName}</h4>
          </div>
        </div>

        <div className="header__right__create">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
        <div className="header__right__msg">
          <IconButton>
            <ForumIcon />
          </IconButton>
        </div>
        <div className="header__right__notification">
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </div>
        <div className="header__right__account">
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
