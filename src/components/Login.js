import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const loginSwap = () => {
    setHaveAccount(!haveAccount)
  }
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="wallpaper"
        />
      </div>

      <div className="absolute top-0 left-0 w-full z-10 px-8 py-4">
        <Header />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black/60 p-16 rounded-md text-white max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">{haveAccount ? "Sign In" : "Sign Up"}</h2>
          <form className="flex flex-col gap-4">
            {!haveAccount && <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />}
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 py-3 rounded-md font-bold">
              {haveAccount ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <h4 className="my-6">{haveAccount ? "New to Netflix? " : "Have an account? "}<span onClick={loginSwap} className="font-bold cursor-pointer">{haveAccount ? "Sign up now." : "Sign In."}</span></h4>
          <p className="font-light text-xs pr-10">This page is protected by SomeOne's reCAPTCHA to ensure that you're not a bot</p>
        </div>
      </div>


    </div>
  );
};

export default Login;
