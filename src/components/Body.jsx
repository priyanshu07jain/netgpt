import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utilies/firebase';
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utilies/userSlice"

const Body = () => {
  const dispatch=useDispatch();

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
       
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
       
      }
    });    
  },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body