import { useEffect, useState } from "react"
import app from "../firebase.init"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
const auth =getAuth(app);
const googleProvider=new GoogleAuthProvider()

const useFirebase=()=>{
    const [user,setuser]=useState({})


    const signWithGoogle=()=>{
        signInWithPopup(auth,googleProvider).then(result => setuser(result.user)).catch(er => console.error(er))
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=> setuser(user))
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(()=>{console.log('signout successful')})
    }

    return {user,setuser,signWithGoogle,handleSignOut}
}

export default useFirebase