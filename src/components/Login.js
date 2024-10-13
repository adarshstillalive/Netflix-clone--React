import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_IMG_URL, LOGO_URL } from "../utils/constant";

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [validationError, setValidationError] = useState(null)
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null)

  const submitForm = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = !haveAccount ? nameRef.current.value : true;

    const isValid = validateForm(email, password, name);
    setValidationError(isValid);

    if (isValid) return;

    if (haveAccount) {

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError(errorMessage)
        });

    } else {
      createUserWithEmailAndPassword(auth, email, password,)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name })
            .then(() => {
              navigate('/browse')
            }).catch((error) => {
              console.log(error);
              setValidationError(error)
            })

        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError(errorMessage)
        });
    }

  }

  const loginSwap = () => {
    setHaveAccount(!haveAccount)
  }
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          className="h-full w-full object-cover"
          src={BG_IMG_URL}
          alt="wallpaper"
        />
      </div>

      <div className="absolute top-0 left-0 w-full z-10 px-8 py-4">
        <div className="" style={{ paddingLeft: '10%' }}>
          <img className="absolute w-48" src={LOGO_URL}
            alt="logo" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-black/60 p-16 rounded-md text-white max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6">{haveAccount ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            {!haveAccount && <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />}
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-4 rounded-sm bg-black/40 border border-gray-600 focus:outline-none"
            />
            <p className="py-2 text-red-500 font-light">{validationError}</p>
            <button onClick={submitForm} className="bg-red-600 hover:bg-red-700 py-3 rounded-md font-bold">
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
