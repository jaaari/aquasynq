import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "./firebaseConfig";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";


const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
  {
    provider: EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: true,
  },
],
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    },
  },
};


function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}


export default SignIn;
