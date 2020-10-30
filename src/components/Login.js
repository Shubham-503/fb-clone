import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=".."
        />
        <img
          src="https://w7.pngwing.com/pngs/13/911/png-transparent-facebook-f8-social-media-livechat-facebook-messenger-facebook-blue-text-trademark.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
