import React, { useEffect, useState } from "react";
import "../../css/feed.css";
import Avatar from "@material-ui/core/Avatar";
import PhotoIcon from "@material-ui/icons/Photo";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "../Post/Post";
import { db } from "../../Firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/features/userSlice";

const Feed = () => {
  //using redux to get the data from firebse
  //user ka data ko get karna hai
  const user = useSelector(selectUser);
  // console.log("option",user);

  const [input, setInput] = useState("");
  const [posts, setPost] = useState([]); //get data from firebase db
  //form submit
  const submitPost = (e) => {
    e.preventDefault();
    // to send data in firebase(backend, database...)
    // 1=> db.add=> store the data in the Database
    // 2=> db.get=> get the data from the Database
    // 3=> .collection is the database in the firebase firestore Database
    // 4=> ("posts") are the method to store the data in the firestore we can put anyname
    db.collection("posts").add({
      name: user.displayName,
      description: "This is test",
      message: input,
      photoURL: user.photoURL,
      timstamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  //how to get data dfrom backend

  useEffect(() => {
    db.collection("posts")
      .orderBy("timstamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  // console.log("posts", posts);

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          {/* <Avatar src="https://media-exp1.licdn.com/dms/image/D4D35AQEUuT3YD5QlRg/profile-framedphoto-shrink_100_100/0/1655633408047?e=1662285600&v=beta&t=y4u90QQGwQz8OwQAvOb-0xl_oMbkRaXWBySjrczshv0" /> */}
          <Avatar src={user.photoURL} />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="feed__options">
          <div className="option">
            <PhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <PlayCircleFilledIcon style={{ color: "blue" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <EventIcon style={{ color: "red" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "red" }} />
            <span>write article</span>
          </div>
        </div>
      </div>

      <Post
        name="Md Intezar Alam"
        description="we are learning web development"
        message="This is clone of Linkedin"
        photoURL="https://media-exp1.licdn.com/dms/image/D4D35AQEUuT3YD5QlRg/profile-framedphoto-shrink_100_100/0/1655633408047?e=1662285600&v=beta&t=y4u90QQGwQz8OwQAvOb-0xl_oMbkRaXWBySjrczshv0"
      />
      {/* map method 1=> distructure the data*/}
      {posts.map(({ data: { name, description, message, photoURL }, id }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
      ))}
    </div>
  );
};

export default Feed;
