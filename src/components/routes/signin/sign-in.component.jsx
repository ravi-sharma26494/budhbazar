import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   const fetchRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const { user } = response;
  //       const userDocRef = await createUserDocumentFromAuth(user);
  //     }
  //   };
  //   fetchRedirectResult();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      SignIn
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default SignIn;
