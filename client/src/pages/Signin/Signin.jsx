import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../../redux/userSlice";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignIn, setIsSignIn] = useState(true); // State to track whether signing in or signing up

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signin", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post("http://localhost:8000/api/auth/signup", {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  return (
    <div class="pb-12 flex items-center justify-around">
      <div class="p-2">
        <img
          src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png"
          class="w-96"
          alt=""
        />
      </div>
      <div class="pt-12 mt-12">
        <h1 className="text-gray-100 font-bold text-5xl">Happening now</h1>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mt-8">
            <button
              className={`text-xl py-2 px-4 rounded-full ${
                isSignIn ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setIsSignIn(true)}
            >
              Sign in
            </button>
            <button
              className={`text-xl py-2 px-4 rounded-full ${
                isSignIn ? "bg-gray-300" : "bg-blue-500 text-white"
              }`}
              onClick={() => setIsSignIn(false)}
            >
              Sign up
            </button>
          </div>

          {isSignIn ? (
            <form
              className="bg-gray-200 flex flex-col py-12 px-12 rounded-lg w-3/4 md:w-full mx-auto gap-10 mt-8"
              onSubmit={handleLogin}
            >
              <h2 className="text-3xl font-bold text-center">
                Sign in to Twitter
              </h2>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className="text-xl py-2 rounded-full px-4"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="text-xl py-2 rounded-full px-4"
              />
              <button
                type="submit"
                className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
              >
                Sign in
              </button>
            </form>
          ) : (
            <form
              className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-3/4 md:w-full mx-auto gap-10 mt-8"
              onSubmit={handleSignup}
            >
              <h2 className="text-3xl font-bold text-center">
                Sign up to Twitter
              </h2>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className="text-xl py-2 rounded-full px-4"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                required
                className="text-xl py-2 rounded-full px-4"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="text-xl py-2 rounded-full px-4"
              />
              <button
                type="submit"
                className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
              >
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
