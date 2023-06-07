import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, firestore } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const AuthContext = createContext();

export const useAuthFirebase = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: "",
    username: "",
    email: "",
    coin: 0,
    ticket: 0,
    isGet50: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (User) {
        setUser({
          username: User.displayName,
          uid: User.uid,
          email: User.email,
          coin: 100000,
          ticket: 0,
          isGet50: false,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUserDocument = (email, name, address, gender, handphone) => {
    return addDoc(collection(firestore, "users"), {
      email: email,
      username: name,
      address: address,
      gender: gender,
      handphone: handphone,
    });
  };

  const signup = async (email, password, userName) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (User) => {
        updateProfile(User.user, {
          displayName: userName,
        });
      }
    );
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signup,
        signout,
        addUserDocument,
      }}
    >
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
