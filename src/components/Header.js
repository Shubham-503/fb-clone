import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ViewCompactTwoToneIcon from "@material-ui/icons/ViewCompactTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import "./Header.css";

function Header() {
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
        <div className="header__centerHome">
          <HomeOutlinedIcon />
        </div>

        <div className="header__centerWatch">
          <OndemandVideoOutlinedIcon />
        </div>

        <div className="header__centerMarketPlace">
          <StorefrontOutlinedIcon />
        </div>

        <div className="header__centerGroup">
          <SupervisedUserCircleIcon />
        </div>

        <div className="header__centerGaming">
          <ViewCompactTwoToneIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightAvatar">
          <div className="header__rightAvatar__image">
            <AccountCircleTwoToneIcon />
          </div>
          <div className="header__rightAvatar__name">
            <span>Kumar</span>
          </div>
        </div>

        <div className="header__right__create">
          <AddTwoToneIcon />
        </div>
        <div className="header__right__msg">
          <AddTwoToneIcon />
        </div>
        <div className="header__right__notification">
          <AddTwoToneIcon />
        </div>
        <div className="header__right__account">
          <AddTwoToneIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
