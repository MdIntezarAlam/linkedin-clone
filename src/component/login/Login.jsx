import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../css/login.css";
import { getAuth } from "../../Firebase";
import { loginuser } from "../../Redux/features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [signup, setSignup] = useState(false);

  //use useDispatch Hooks for redux
  const dispatch = useDispatch();

  const regester = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("please enter your name");
    }
    if (!photoURL) {
      return alert("please enter your photourl");
    }

    if (!email) {
      return alert("please enter your  email");
    }
    if (!password) {
      return alert("please enter your password");
    }

    //import getAuth from firebase for authentatons purpose
    getAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoURL,
          })
          .then(() => {
            dispatch(
              loginuser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: userAuth.user.photoURL,
                displayName: name,
              }));
          })
      }).catch((error) => alert(error));
    setName("");
    setEmail("");
    setPassword("");
    setphotoURL("");
  };

  //sigin in
  const signIn = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("please enter your  email");
    }
    if (!password) {
      return alert("please enter your password");
    }

    getAuth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          }));
      })
      .catch((error) =>alert(error));
  };
  return (
    <>
      <div className="login_screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUtqIshmO9X-rlTsnKrsK6KgiSC3JxGi4BxI4PRiZzIGUyuY6qCmppHByXeb9C5F4H44&usqp=CAU"
          alt=""
        />
        {signup === true ? (
          <form onSubmit={regester}>
            <input
              type="text"
              placeholder="Full Name (Require if Registering)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Progile picture URL"
              value={photoURL}
              onChange={(e) => setphotoURL(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sigin Up" />
            <h3>
              Already a member ?
              <span onClick={(e) => setSignup(false)}>Login Here</span>
            </h3>
          </form>
        ) : (
          <form onSubmit={signIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sigin In" />
            <h3>
              Not a member ?
              <span onClick={(e) => setSignup(true)}>Regester Here</span>
            </h3>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
