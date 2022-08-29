import React from "react";
// import "../css/headeroption.css";
import "../../css/header.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "../../Redux/features/userSlice";
import firebase from "firebase";
const Headeroptions = ({ Icon, title, avatar }) => {
  //using redux to get the data from firebse
  //user ka data ko get karna hai
  const user = useSelector(selectUser);
  // console.log("option",user);
  return (
    <div className="header__option">
      {Icon && <i>{Icon}</i>}
      {avatar && (
        <Avatar
          name={avatar}
          src={user.photoURL}
          onClick={(e) => firebase.getAuth().signOut()}
        />
      )}
      <span>{title}</span>
    </div>
  );
};

export default Headeroptions;
