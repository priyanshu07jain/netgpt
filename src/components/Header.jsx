import {signOut} from 'firebase/auth';
import {auth} from '../utilies/firebase'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { addUser, removeUser } from "../utilies/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGO, USER_AVATAR } from '../utilies/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
       navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return()=>unsubscribe();
  }, []);

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between cursor-pointer">
         <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
         {user&&<div className=" p-2">
          <img 
          onClick={handleSignout}
          className=""
          src={USER_AVATAR}></img>
         </div>}
    </div>
  )
}

export default Header