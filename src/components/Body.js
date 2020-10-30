import React, { useEffect, useState } from "react";
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
import { useStateValue } from "../context/StateProvider";
import db from "../firebase";

function Body() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="body">
      <div className="body__left">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="Covid-19 Information Center"
        />
        <SidebarRow Icon={FlagIcon} title="Pages" />
        <SidebarRow Icon={StorefrontOutlinedIcon} title="Marketplace" />
        <SidebarRow Icon={SupervisorAccountIcon} title="Friends" />
        <SidebarRow Icon={OndemandVideo} title="Videos" />
      </div>

      <div className="body__center">
        <div className="body__story">
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
          <Story
            title="Shubham"
            profileSrc={user.photoURL}
            src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/48362204_1719372534834556_8039148948033634304_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=ClgAf70Q6QEAX-FwEsH&_nc_ht=scontent.fccu3-1.fna&oh=e6b4a96427941df9be643551dbacdf81&oe=5FC0ABA7"
          />
        </div>
        <AddPost />
        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
      </div>

      <div className="body__right">
        <Widgets />
      </div>
    </div>
  );
}

export default Body;
