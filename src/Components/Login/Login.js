import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import vectorImg from "../../images/loginv-removebg-preview.png";
import Navbar from "../Home/Header/Navbar/Navbar";
import "./login.css";
import google from "../../images/google.svg";
import firebaseConfig from "./firebaseConfig";
import { OldUserContext, UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useContext(OldUserContext);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  console.log(user);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {});
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((error) => {});
  };
  let userName;

  const handleBlur = (e) => {
    let isFormValid = true;

    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFormValid = isEmailValid;
    }

    if (e.target.name === "password") {
      const isPassValid = e.target.value.length > 6;
      const passwordHasNum = /\d{1}/.test(e.target.value);

      isFormValid = passwordHasNum && isPassValid;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          // const signedInUser = {
          //   isSignedIn: true,
          //   name: displayName,
          //   email: email,
          //   photo: photoURL,
          // };
          // setUser(signedInUser);
          user.isSignedIn = true;
          const newUserInfo = { ...user };

          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          user.isSignedIn = true;
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(loggedInUser.name);

          console.log(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("name updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row login-field">
      <Navbar></Navbar>

      <div className=" col-md-5 mt-5">
        <form className="login-form" style={{ textAlign: "center" }}>
          <h3 className="gym-brand">CREATE AN ACCOUNT</h3>

          {newUser && (
            <input
              className="login-input"
              onBlur={handleBlur}
              name="name"
              type="name"
              placeholder="your name(min 3 character)"
              required
            />
          )}

          <input
            className="login-input"
            onBlur={handleBlur}
            type="email"
            name="email"
            id=""
            placeholder="write your email"
            required
          />

          <input
            className="login-input"
            onBlur={handleBlur}
            type="password"
            name="password"
            id=""
            placeholder="write your password"
            required
          />

          {newUser && (
            <input
              className="login-input"
              onBlur={handleBlur}
              type="phone number"
              name="phone Number"
              id=""
              placeholder="Phone Number please!"
              required
            />
          )}

          <input
            style={{ width: "100%" }}
            className="btn gym-brand-btn text-secondary"
            onClick={handleSubmit}
            type="submit"
            value={newUser ? "sign-up" : "sign-in"}
          />
          {newUser ? (
            <p className="text">
              Already a member?{" "}
              <button
                className="btn gym-brand-btn"
                style={{ color: "indianred" }}
                onClick={() => setNewUser(!newUser)}
              >
                Login
              </button>{" "}
            </p>
          ) : (
            <p className="text">
              Not a member{" "}
              <button
                className="btn gym-brand-btn"
                style={{ color: "indianred" }}
                onClick={() => setNewUser(!newUser)}
              >
                sign up
              </button>
            </p>
          )}

          {loggedInUser.isSignedIn ? (
            <button
              style={{ width: "100%", height: "45px" }}
              className="btn gym-brand-btn text-secondary mt-5"
              onClick={handleSignOut}
            >
              <img
                src={google}
                alt=""
                style={{ width: "30px" }}
                className="img-fluid me-5"
              />
              Sign Out
            </button>
          ) : (
            <button
              style={{ width: "100%", height: "45px" }}
              className="btn gym-brand-btn text-secondary mt-5"
              onClick={handleGoogleSignIn}
            >
              <img
                src={google}
                alt=""
                style={{ width: "30px" }}
                className="img-fluid me-5"
              />
              google sign in
            </button>
          )}
        </form>
      </div>

      <div className="col-md-5">
        <img
          style={{ width: "800px", marginTop: "150px" }}
          className="img-fluid"
          src={vectorImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
