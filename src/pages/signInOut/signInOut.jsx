import React from "react";
import "./signInOut.styles.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";

export const SignInOut = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInOut;
