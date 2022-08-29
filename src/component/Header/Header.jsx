import React from "react";
import "../../css/header.css";
import Headeroptions from "./Headeroptions";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "../../Redux/features/userSlice";

const Header = () => {
  //using redux to get the data from firebse
  //user ka data ko get karna hai
  const user = useSelector(selectUser);
  // console.log(user);

  return (
    <div className="header">
      <div className="header_left">
        <div className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="header_right">
        <Headeroptions Icon={<HomeIcon />} title="home" />
        <Headeroptions Icon={<GroupAddIcon />} title="my Network" />
        <Headeroptions Icon={<WorkIcon />} title="Job" />
        <Headeroptions Icon={<SmsIcon />} title="message" />
        <Headeroptions Icon={<NotificationsIcon />} title="notifications" />
        <Headeroptions avatar={<Avatar />} title={user.displayName} />
      </div>
    </div>
  );
};

export default Header;
