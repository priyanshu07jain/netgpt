import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const ToggleSignInForm=()=>{
   setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        ></img>
      </div>
      <form className=" absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0  text-white rounded-lg  bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">{isSignInForm?"Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4  my-4  bg-gray-700 w-full"
        />}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4  my-4  bg-gray-700 w-full"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4  my-4  bg-gray-700 w-full "
        />
        {!isSignInForm&&
        <input
          type="Password"
          placeholder="Confirm Password"
          className="p-4  my-4  bg-gray-700 w-full "
        />}
        <button className="p-4 my-4  bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In" :"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up Now":"Already Register?Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
