import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-action";
import "./sign-in.style.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handelSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handelChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handelChange}
          value={email}
          required
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handelChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomBotton type="submit">SIGN IN</CustomBotton>
          <CustomBotton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomBotton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
