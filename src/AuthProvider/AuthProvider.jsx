import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FirebasConfig/FirebaseConfig";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

const [user,setUser]=useState(null)
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const Singup=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
}
const Login=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
}
const GoogleSing=()=>{
      return  signInWithPopup(auth,googleProvider);
}
const LogoOut=()=>{
      return signOut(auth)
}
useEffect(()=> {
      const unsubcript=onAuthStateChanged(auth, logged=>{
            setUser(logged)
      })
      return ()=>{
          unsubcript()
      }
} ,[])

     const userinfo={
          Singup,
          user,
          GoogleSing,
          LogoOut,
          Login
     }
     return (
          <div>

               <AuthContext.Provider value={userinfo}>
                    {children}
               </AuthContext.Provider>


          </div>
     );
};

export default AuthProvider;