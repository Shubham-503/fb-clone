import React, { useState } from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Story from "./Story";
import SidebarRow from "./SidebarRow";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { OndemandVideo } from "@material-ui/icons";
import "./Body.css";
import AddPost from "./AddPost";
import Post from "./Post";
import Widgets from "./Widgets";

function Body() {
  return (
    <div className="body">
      <div className="body__left">
        <SidebarRow
          src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
          title="Kumar"
        />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="Covid-19 Information Center"
        />
        <SidebarRow Icon={FlagIcon} title="Pages" />
        <SidebarRow Icon={StorefrontOutlinedIcon} title="Marketplace" />
        <SidebarRow Icon={SupervisorAccountIcon} title="Friends" />
        <SidebarRow Icon={OndemandVideo} title="Videos" />

        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
        <h4>Shubham</h4>
      </div>

      <div className="body__center">
        <div className="body__story">
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX88gx1c&_nc_ht=scontent.fccu3-1.fna&oh=50090b44c4cc2ad074f260b136bffbc5&oe=5FC0ABA7"
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
        </div>
        <AddPost />
        <Post
          message="hi everybody"
          image="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX_syD9X&_nc_ht=scontent.fccu3-1.fna&oh=4a6d344c106827d5d9f0ef4d8ef2d065&oe=5FC0ABA7"
          username="Shubham"
          profilePic="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX_syD9X&_nc_ht=scontent.fccu3-1.fna&oh=4a6d344c106827d5d9f0ef4d8ef2d065&oe=5FC0ABA7"
        />
      </div>
      <div className="body__right">
        <Widgets />
      </div>
    </div>
  );
}

export default Body;
