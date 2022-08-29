import React from "react";
import "../../css/sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "../../Redux/features/userSlice";

const Sidebar = () => {
  //using redux to get the data from firebse
  //user ka data ko get karna hai
  const user = useSelector(selectUser);
  // console.log("option",user);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="https://media-exp1.licdn.com/dms/image/C4D16AQEvsUVfCKwzqQ/profile-displaybackgroundimage-shrink_350_1400/0/1655463188689?e=1667433600&v=beta&t=ltrACi88YL8CIZBjEEc8U_xMSDzM6_bzpqU-H_gZynk" />
        <div className="profile__details">
          <Avatar src={user.photoURL} />
          {/* <h3>Md Intezar Alam</h3> */}
          <h3>{user.displayName}</h3>
          <p>Web Developer</p>
        </div>
        <div className="profile_status">
          <span>Who viewed your profile</span>
          <span className="satus__number">25</span>
        </div>
        <div className="profile_status">
          <span>
            Connection <br />
            <b>Grow your network</b>{" "}
          </span>
          <span className="satus__number">125</span>
        </div>
      </div>
      {/* sidebar_recent */}
      <div className=" sidebar_recent">
        <p>Recent</p>
        <p className="has">
          <span>#</span>React Js
        </p>
        <p className="has">
          <span>#</span>front-end dvelopment
        </p>
        <p className="has">
          <span>#</span>web devlopment
        </p>
        <p className="has">
          <span>#</span>web designer
        </p>
        <p className="has">
          <span>#</span>redux
        </p>
        <p className="has">
          <span>#</span>git
        </p>
        <p className="has">
          <span>#</span>gitHub
        </p>
        <p className="has">
          <span>#</span>programming
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
