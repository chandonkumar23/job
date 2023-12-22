/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "./fireConfig";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvuder = ({children}) =>{
    const [user, setUser]= useState({});
    const [load, setLoad] = useState(true);
    const createUser = (email,password) =>{
        setLoad(true);
        return  createUserWithEmailAndPassword(auth,email,password)

    }
    const SignIN = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
  
    return signInWithPopup(auth,googleProvider);
   }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () =>{
        return signOut(auth);
    }



    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
       });
       return () =>{
        unSubscribe();
       }
    },[])

    const authInfo = {
        user,
        createUser,
        SignIN,
        logOut,
        updateUserProfile,
        load,
        googleSignIn
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvuder;