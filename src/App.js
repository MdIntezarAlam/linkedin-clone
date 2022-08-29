import React, { useEffect } from "react";
import Feed from "./component/Feed/Feed";
import Header from "./component/Header/Header";
import Login from "./component/login/Login";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./component/Sidebar/Sidebar";
import Widget from "./component/Widget/Widget";
import { loginuser, logoutuser, selectUser } from "./Redux/features/userSlice";
import { getAuth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // console.log(user);

  useEffect(() => {
    getAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //alredy logon
        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          })
        );
      } else {
        //logout
        dispatch(logoutuser())
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app_wraper">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
