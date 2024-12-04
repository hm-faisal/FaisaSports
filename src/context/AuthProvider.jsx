import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   Sign in with Email, password
  const emailPasswordLogin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Sign up new user
  const emailPasswordNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (name, profile) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profile,
    });
  };

  // Logout User

  const logoutUser = () => {
    return signOut(auth).then(() => alert("Logout Successful"));
  };

  // Google Login
  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    setUser,
    emailPasswordLogin,
    emailPasswordNewUser,
    updateUserProfile,
    logoutUser,
    googleLoginHandler,
    loading,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
