import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Spline from "@splinetool/react-spline";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",

    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
      <div className="relative flex flex-col min-w-0  break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border ">
        <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
          <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text text-4xl">
            Be Part Of Us
          </h3>
          <p className="mb-0 text-secondary">
            Enter your data to get an access
          </p>
        </div>
        <div className="flex-auto p-6 ">
          <form>
            <label className="mb-2 ml-1 font-bold text-xs text-primary">
              Email
            </label>
            <div className="mb-4">
              <input
                type="email"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Email"
                name="email"
                min="3"
                aria-describedby="email-addon"
              />
            </div>
            <label className="mb-2 ml-1 font-bold text-xs text-primary">
              Full Name
            </label>
            <div className="mb-4">
              <input
                type="text"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                placeholder="Full Name"
                name="name"
                min="3"
                aria-describedby="email-addon"
              />
            </div>
            <label className="mb-2 ml-1 font-bold text-xs text-primary">
              Password
            </label>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                aria-label="Password"
                aria-describedby="password-addon"
              />
            </div>
            <label className="mb-2 ml-1 font-bold text-xs text-primary">
              Confirm Password
            </label>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                name="co-password"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                aria-label="Password"
                aria-describedby="password-addon"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
          <p className="mx-auto mb-6 leading-normal text-sm text-primary">
            Do you have an account?
            <Link
              className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
